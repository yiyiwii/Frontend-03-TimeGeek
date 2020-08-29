学习笔记

## CSS

### at-rules

1. @charset

2. @import

3. @media (!important)

4. @page

5. @counter-style

6. @keyframes (!important)

7. @fontface (!important)

8. @support

9. @namespace

### rule

#### selector

1. `*`
2. `div svg|a`
3. `.cls`
4. `#id`
   

#### declaration
 * Key
 * Value


### 5.7 CSS选择器 | 选择器的优先级
> ID selector > Class selector > Type selector
> Universal selector (*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) have no effect on specificity. (The selectors declared inside :not() do, however.)

作业： 

> 请写出下面选择器的优先级
> 1. div#a.b.c .c[id=x] [0 1 3 1]
> 2. #a:not(#b)         [0 2 0 0]
> 3. *.a                [0 0 1 0]
> 4. div.a              [0 0 1 1]

Priority:
2 > 1 > 4 > 3

### 5.9 伪元素

作业：
> 编写一个 match 函数。它接受两个参数，第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。这个元素你可以认为它一定会在一棵 DOM 树里面。通过选择器和 DOM 元素来判断，当前的元素是否能够匹配到我们的选择器。（不能使用任何内置的浏览器的函数，仅通过 DOM 的 parent 和 children 这些 API，来判断一个元素是否能够跟一个选择器相匹配。）以下是一个调用的例子。

```
function match(selector, element) {
    return true;
}


match("div #id.class", document.getElementById("id"));
```

思考题：
> 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
因为`first-letter`选定的一个固定的block，可以用`float`控制， 而`first-line`不同浏览器得出的内容不同.


### Reference
1. [CSS Rule Priorities](https://stackoverflow.com/questions/2876575/css-rule-priorities)

2. [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

3. [Calculating a selector's specificity](https://www.w3.org/TR/CSS21/cascade.html#specificity)

4. [CSS Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

5. [W3 CSS Selector](https://www.w3.org/TR/selectors-3/#class-html)
