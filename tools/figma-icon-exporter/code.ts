/**
 * Figma Icon SVG Exporter Plugin
 *
 * Exports SVG path data from selected icon components
 */

interface IconData {
  name: string;
  size: number;
  svg: string;
  paths: Array<{
    d: string;
    stroke?: string;
    strokeWidth?: string | number;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    fill?: string;
  }>;
}

// Show UI
figma.showUI(__html__, { width: 400, height: 500 });

// Extract SVG path data from a node
async function extractIconData(node: SceneNode): Promise<IconData | null> {
  if (node.type !== 'COMPONENT' && node.type !== 'INSTANCE' && node.type !== 'FRAME') {
    return null;
  }

  try {
    // Export as SVG
    const svg = await node.exportAsync({ format: 'SVG_STRING' });

    // Parse SVG to extract paths
    const pathRegex = /<path[^>]*>/g;
    const paths: IconData['paths'] = [];

    let match;
    while ((match = pathRegex.exec(svg)) !== null) {
      const pathTag = match[0];

      // Extract d attribute
      const dMatch = pathTag.match(/d="([^"]*)"/);
      if (!dMatch) continue;

      const pathData: any = {
        d: dMatch[1],
      };

      // Extract stroke attributes
      const strokeMatch = pathTag.match(/stroke="([^"]*)"/);
      if (strokeMatch && strokeMatch[1] !== 'none') {
        pathData.stroke = strokeMatch[1];
      }

      const strokeWidthMatch = pathTag.match(/stroke-width="([^"]*)"/);
      if (strokeWidthMatch) {
        pathData.strokeWidth = strokeWidthMatch[1];
      }

      const strokeLinecapMatch = pathTag.match(/stroke-linecap="([^"]*)"/);
      if (strokeLinecapMatch) {
        pathData.strokeLinecap = strokeLinecapMatch[1];
      }

      const strokeLinejoinMatch = pathTag.match(/stroke-linejoin="([^"]*)"/);
      if (strokeLinejoinMatch) {
        pathData.strokeLinejoin = strokeLinejoinMatch[1];
      }

      const fillMatch = pathTag.match(/fill="([^"]*)"/);
      if (fillMatch && fillMatch[1] !== 'none') {
        pathData.fill = fillMatch[1];
      }

      paths.push(pathData);
    }

    // Determine size from name or dimensions
    const name = node.name;
    let size = 16;

    if (name.includes('24') || name.includes('.24.')) {
      size = 24;
    } else if (name.includes('16') || name.includes('.16.')) {
      size = 16;
    } else if ('width' in node) {
      size = Math.round(node.width);
    }

    return {
      name: name,
      size: size,
      svg: svg,
      paths: paths,
    };
  } catch (error) {
    console.error(`Error exporting ${node.name}:`, error);
    return null;
  }
}

// Process selected nodes or all icons on page
async function processIcons(nodes: readonly SceneNode[]) {
  const icons: IconData[] = [];
  let processed = 0;

  figma.ui.postMessage({
    type: 'progress',
    message: `Processing ${nodes.length} nodes...`,
    current: 0,
    total: nodes.length
  });

  for (const node of nodes) {
    const iconData = await extractIconData(node);
    if (iconData) {
      icons.push(iconData);
    }

    processed++;
    if (processed % 10 === 0) {
      figma.ui.postMessage({
        type: 'progress',
        message: `Processed ${processed} of ${nodes.length} icons...`,
        current: processed,
        total: nodes.length
      });
    }
  }

  figma.ui.postMessage({
    type: 'complete',
    icons: icons,
    message: `Successfully exported ${icons.length} icons!`
  });
}

// Find all icon components on current page
function findAllIcons(): SceneNode[] {
  const icons: SceneNode[] = [];

  function traverse(node: BaseNode) {
    if ('children' in node) {
      for (const child of node.children) {
        // Look for nodes with "icon" in the name
        if (child.name.toLowerCase().includes('icon')) {
          if (child.type === 'COMPONENT' || child.type === 'INSTANCE' || child.type === 'FRAME') {
            icons.push(child as SceneNode);
          }
        }
        traverse(child);
      }
    }
  }

  traverse(figma.currentPage);
  return icons;
}

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'export-selected') {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.ui.postMessage({
        type: 'error',
        message: 'Please select at least one icon component'
      });
      return;
    }
    await processIcons(selection);
  } else if (msg.type === 'export-all') {
    const icons = findAllIcons();
    if (icons.length === 0) {
      figma.ui.postMessage({
        type: 'error',
        message: 'No icons found on current page. Icons should have "icon" in their name.'
      });
      return;
    }
    await processIcons(icons);
  } else if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
