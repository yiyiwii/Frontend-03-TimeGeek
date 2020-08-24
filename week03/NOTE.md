学习笔记

### emit function

### DOM Tree Construction

Use stack.

### CSS [查漏补缺]
* Attribute selector 
```
/* css */
div[lang="zh-CN"] {
    color: green;
}
/* html */
<div lang="zh-CN">你好世界！</div>
```
* Pseudo-class selector, pseudo-elements, combinators
```
a:hover {}
p::first-line {}
article > p {}
```
`article > p` selects paragraphs `<p>` that are direct children of `<article>`.


### 3.12 CSS计算 | 计算选择器与元素匹配

作业： (TODO)
> 实现复合选择器，实现支持空格的 Class 选择器

### 3.14 CSS计算 | specificity的计算逻辑

作业： (TODO)
> 请同学们尝试再 selectorParts 里面去解析复合选择器


### Reference:
1. [Mozilla CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
2. [Mozilla CSS Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
