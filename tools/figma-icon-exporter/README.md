# Figma Icon SVG Exporter

批量导出Figma图标的SVG路径数据并转换为React组件的工具。

## 使用步骤

### 1. 安装Figma插件

1. 在Figma桌面应用中，点击菜单 **Plugins** → **Development** → **Import plugin from manifest**
2. 选择此目录下的 `manifest.json` 文件
3. 插件将被添加到你的Figma账户中

### 2. 导出图标数据

1. 在Figma中打开UI3图标文件
2. 运行插件：**Plugins** → **Development** → **Icon SVG Exporter**
3. 选择导出方式：
   - **Export Selected Icons**: 导出当前选中的图标
   - **Export All Icons on Page**: 导出当前页面所有包含"icon"的组件
4. 等待处理完成
5. 点击 **Copy to Clipboard** 复制JSON数据
6. 将数据保存为文件，例如 `icons-data.json`

### 3. 转换为React组件

```bash
# 在此目录下运行
node convert-icons.js icons-data.json
```

脚本将自动：
- 解析JSON数据
- 生成React图标组件（.tsx文件）
- 按尺寸分组（16px和24px）
- 更新index.ts导出文件
- 将组件保存到 `packages/icons/src/16/` 和 `packages/icons/src/24/`

### 4. 构建icons包

```bash
cd ../../packages/icons
npm run build
```

### 5. 验证

在Storybook中查看新添加的图标：

```bash
cd ../../apps/storybook
npm run dev
```

访问 Icons → Overview 页面查看所有图标。

## 导出数据格式

插件导出的JSON格式：

```json
[
  {
    "name": "icon.16.plus",
    "size": 16,
    "svg": "<svg>...</svg>",
    "paths": [
      {
        "d": "M8 3V13M3 8H13",
        "stroke": "currentColor",
        "strokeWidth": "1.5",
        "strokeLinecap": "round",
        "strokeLinejoin": "round"
      }
    ]
  }
]
```

## 命名规则

- Figma图标命名：`icon.{size}.{name}` （例如：`icon.16.plus`）
- 生成的组件名：PascalCase（例如：`Plus`）
- 文件名：`{ComponentName}.tsx`（例如：`Plus.tsx`）

## 注意事项

1. **图标命名**：确保Figma中的图标名称包含"icon"关键字
2. **尺寸识别**：从名称中的"16"或"24"识别尺寸，或使用组件宽度
3. **路径数据**：支持stroke和fill属性，自动转换为currentColor
4. **多路径**：支持包含多个path元素的图标

## 故障排除

### 插件无法找到图标

- 确保图标组件名称包含"icon"（不区分大小写）
- 使用"Export Selected Icons"手动选择要导出的图标

### SVG路径数据不正确

- 检查Figma中的图标是否使用矢量图层
- 避免使用光栅图片或复杂的布尔运算
- 尽量使用简单的path元素

### 生成的组件名称冲突

- 检查是否有重复的图标名称
- 手动重命名冲突的组件

## 示例工作流程

```bash
# 1. 从Figma导出（使用插件）
# 2. 保存JSON数据到 icons-data.json

# 3. 转换为组件
node convert-icons.js icons-data.json

# 4. 构建
cd ../../packages/icons
npm run build

# 5. 验证
cd ../../apps/storybook
npm run dev
```

完成！所有图标现在都可以使用了：

```tsx
import { Plus, Close, Search } from '@figui3/icons/16';
import { Settings, Expand } from '@figui3/icons/24';

<Plus />
<Settings size={32} color="var(--color-icon-brand)" />
```
