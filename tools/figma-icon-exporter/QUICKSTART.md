# 快速开始 - 批量导出Figma图标

## 🚀 3步快速导出

### 步骤1：导入Figma插件（1分钟）

1. 打开Figma桌面应用
2. 点击菜单：**Plugins** → **Development** → **Import plugin from manifest...**
3. 找到并选择这个文件：
   ```
   /Users/johnson/Documents/Figma/UI3/tools/figma-icon-exporter/manifest.json
   ```
4. 点击"Open"

✅ 插件已安装！

### 步骤2：导出图标数据（2分钟）

1. 在Figma中打开你的UI3图标文件
2. 打开你刚安装的插件：
   - 点击菜单：**Plugins** → **Development** → **Icon SVG Exporter**
3. 在插件界面中点击：**Export All Icons on Page**
   - 或者，先选中要导出的图标，然后点击 **Export Selected Icons**
4. 等待处理完成（会显示进度）
5. 点击 **Copy to Clipboard** 复制JSON数据
6. 将数据保存为文件：
   ```bash
   cd /Users/johnson/Documents/Figma/UI3/tools/figma-icon-exporter
   # 粘贴到新文件
   pbpaste > icons-data.json
   ```

✅ 图标数据已导出！

### 步骤3：转换并生成组件（1分钟）

```bash
# 在此目录下运行转换脚本
cd /Users/johnson/Documents/Figma/UI3/tools/figma-icon-exporter
node convert-icons.js icons-data.json

# 构建icons包
cd ../../packages/icons
npm run build
```

✅ 完成！所有图标组件已生成！

## 📦 验证结果

启动Storybook查看新图标：

```bash
cd /Users/johnson/Documents/Figma/UI3/apps/storybook
npm run dev
```

打开浏览器访问Storybook，进入 **Icons → Overview** 页面，你会看到所有新添加的图标！

## 💡 提示

- **批量导出**：插件会自动查找所有名称包含"icon"的组件
- **选择性导出**：在Figma中选中特定图标，然后使用"Export Selected Icons"
- **重新导出**：如果需要更新某些图标，重复上述步骤即可，新组件会覆盖旧组件

## 🔧 故障排除

### 插件无法找到图标？
确保Figma中的图标组件名称包含"icon"关键字（不区分大小写）

### 转换脚本报错？
检查icons-data.json文件是否为有效的JSON格式

### 图标显示不正确？
查看生成的.tsx文件，确认SVG path数据是否正确

## 📝 下次使用

只需重复步骤2和步骤3即可！插件已经安装好了，随时可用。
