(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{469:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[a("strong",[t._v("程序编译与代码优化")])])]),t._v(" "),a("h2",{attrs:{id:"_1-编译期优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-编译期优化"}},[t._v("#")]),t._v(" 1. 编译期优化")]),t._v(" "),a("h3",{attrs:{id:"_1-1-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-概述"}},[t._v("#")]),t._v(" 1.1 概述")]),t._v(" "),a("p",[t._v("有三种编译：")]),t._v(" "),a("p",[t._v("1.前端编译器，javac，把.java文件转化为.class文件")]),t._v(" "),a("p",[t._v("2.后端运行期编译器，JIT编译器，可以把字节码转变为机器码")]),t._v(" "),a("p",[t._v("3.静态提前编译器，AOT编译器，把.java文件直接编译为机器码")]),t._v(" "),a("p",[t._v("一般指的编译器都是指第一类编译器。javac对程序运行效率没有优化，但是有语法糖可以改善编码风格，提高效率。对运行来说，即时编译器JIT的优化更重要")]),t._v(" "),a("h3",{attrs:{id:"_1-2-javac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-javac"}},[t._v("#")]),t._v(" 1.2 javac")]),t._v(" "),a("p",[t._v("编译的过程：")]),t._v(" "),a("p",[t._v("1.解析与填充符号表")]),t._v(" "),a("p",[t._v("2.注解处理")]),t._v(" "),a("p",[t._v("3.分析与字节码生成")]),t._v(" "),a("h4",{attrs:{id:"解析与填充符号表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析与填充符号表"}},[t._v("#")]),t._v(" 解析与填充符号表")]),t._v(" "),a("p",[t._v("1.语法、词法分析")]),t._v(" "),a("p",[t._v("将字符流转为标记（TOKEN）集合，TOKEN是编译过程的最小元素，")]),t._v(" "),a("p",[t._v("语法分析是通过TOKEN序列，构造抽象语法树的过程。构造出AST之后，编译器就不糊对class文件进行操作了，都是针对AST")]),t._v(" "),a("p",[t._v("2.填充符号表")]),t._v(" "),a("p",[t._v("符号表是一组由符号地址、符号信息组成的类似K-V对的数据结构。")]),t._v(" "),a("p",[t._v("语义分析时，符号表用来语义检查、产生中间代码。目标代码生成阶段，符号表时符号名进行地址分配的依据")]),t._v(" "),a("h4",{attrs:{id:"注解处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解处理"}},[t._v("#")]),t._v(" 注解处理")]),t._v(" "),a("h4",{attrs:{id:"语义分析与字节码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语义分析与字节码生成"}},[t._v("#")]),t._v(" 语义分析与字节码生成")]),t._v(" "),a("p",[t._v("语法分析生成抽象语法树，只能保证生成结构正确的抽象，还要进行语义分析，对程序进行上下文检查，保证程序符合逻辑。")]),t._v(" "),a("p",[t._v("语义分析分为：标注检查，数据和控制流分析")]),t._v(" "),a("p",[t._v("1.标注检查")]),t._v(" "),a("p",[t._v("比如变量在使用前是否被声明，赋值时数据类型是否匹配，常量折叠")]),t._v(" "),a("p",[t._v("2.数据和控制流分析")]),t._v(" "),a("p",[t._v("变量在使用前是否被声明，方法每条路径是否有返回值")]),t._v(" "),a("p",[t._v("编译期的数据和控制流分析与类加载时的数据和控制流分析基本一致，校验范围有区别。比如对final的检查：")]),t._v(" "),a("p",[t._v("如果一个局部变量声明为final，在运行期没法保证变量不被修改，因为final与类变量/实例变量不同，它在常量池中没有CONSTANT_Fieldref_info的符号引用，自然也没有访问标志（Access_Flags），运行时虚拟机无法知道一个变量是否是final，因此是在编译期编译器来保证final局部变量无法被修改")]),t._v(" "),a("p",[t._v("3.解语法糖")]),t._v(" "),a("p",[t._v("比如泛型、变长参数、自动装箱/拆箱，运行时是不支持的，需要再编译期还原回基础语法结构")]),t._v(" "),a("p",[t._v("4.字节码生成")]),t._v(" "),a("p",[t._v("把前面步骤生成的信息，比如语法书、符号表，生成字节码文件，写到磁盘里。这个过程中，会对代码少量添加和转换。比如生成构造器："),a("init",[t._v("()与"),a("cinit",[t._v("()（填充符号表阶段就已完成）；比如代码替换，把字符串加操作，替换为StringBuilder()/StringBuffer()的append()。完成语法树的遍历、调整之后，生成class文件，编译过程结束")])],1)],1),t._v(" "),a("h3",{attrs:{id:"_1-3-语法糖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-语法糖"}},[t._v("#")]),t._v(" 1.3 语法糖")]),t._v(" "),a("h4",{attrs:{id:"泛型与类型擦除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛型与类型擦除"}},[t._v("#")]),t._v(" 泛型与类型擦除")]),t._v(" "),a("p",[t._v("Java中的泛型本质上是语法糖，因为编译后就变成了原生类型，相应的地方会插入强制类型转换代码。泛型实现方法称为类型擦除")]),t._v(" "),a("h4",{attrs:{id:"自动装箱拆箱与遍历循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动装箱拆箱与遍历循环"}},[t._v("#")]),t._v(" 自动装箱拆箱与遍历循环")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),t._v(" iterator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("intValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("自动装箱拆箱问题")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("321")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("321")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true 比较的是对象 从缓存中取所以地址相同")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false 不从缓存中取，是两个不同的对象")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true  比较的是对象 从缓存中取所以地址相同")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true 重写了equals，比较的是值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true Long也有缓存池，从缓存中取出了同一个对象")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里解释下，为什么g.equals(a + b)的结果为false。如下可以看到Long类重写了equeals方法，如果参数可以转化为Long类型，则转换之后比较值，如果不能转化，直接返回false。而Integer类型是不能转化为Long类型的")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("longValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"条件编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件编译"}},[t._v("#")]),t._v(" 条件编译")]),t._v(" "),a("p",[t._v("Java中没有条件编译，但是能通过语法糖，实现语句块级别的条件编译")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如上，对于if条件为常量的代码，编译器会优化为")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其他情况在控制流分析中会提示错误")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Wu-Corey/image_store/202204301928552.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_1-4-插入式注解处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-插入式注解处理器"}},[t._v("#")]),t._v(" 1.4 插入式注解处理器")]),t._v(" "),a("h2",{attrs:{id:"_2-运行期优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行期优化"}},[t._v("#")]),t._v(" 2. 运行期优化")]),t._v(" "),a("p",[t._v("Java程序最早是通过解释器解释执行的。后来加入了即时编译器（JIT），当虚拟机发现某个方法/代码块执行频繁，即热点代码，JIT就会把这些代码直接编译为机器码，并进行各种层次的优化，从而提高热点代码的执行效率")]),t._v(" "),a("p",[t._v("Java虚拟机规范没有对即时编译器做出规定，但是即时编译器的好坏对于一款商业虚拟机来说是最重要的指标")]),t._v(" "),a("h3",{attrs:{id:"hotspot虚拟机内的即时编译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotspot虚拟机内的即时编译器"}},[t._v("#")]),t._v(" HotSpot虚拟机内的即时编译器")]),t._v(" "),a("h4",{attrs:{id:"为什么要使用解释器与即时编译器并存的架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用解释器与即时编译器并存的架构"}},[t._v("#")]),t._v(" 为什么要使用解释器与即时编译器并存的架构")]),t._v(" "),a("p",[t._v("这种模式称为混合模式，")]),t._v(" "),a("ul",[a("li",[t._v("-Xint：强制解释模式，编译器完全不参与")]),t._v(" "),a("li",[t._v("-Xcomp：优先编译模式，但是编译无法进行时，仍然要解释执行")])]),t._v(" "),a("p",[t._v("编译器可以提升执行效率，但是仍然需要解释器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("程序需要迅速启动执行，解释器首先发挥作用，省去编译时间")])]),t._v(" "),a("li",[a("p",[t._v("部分嵌入式系统内存资源限制较大，需要用解释执行节约内存")])]),t._v(" "),a("li",[a("p",[t._v("解释器可以作为激进优化的逃生门")])])]),t._v(" "),a("h4",{attrs:{id:"两个不同的即时编译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个不同的即时编译器"}},[t._v("#")]),t._v(" 两个不同的即时编译器")]),t._v(" "),a("p",[t._v("Client Compile（C1编译器），Server Compile（C2编译器）")]),t._v(" "),a("p",[t._v("分层编译")]),t._v(" "),a("h4",{attrs:{id:"编译对象与触发条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译对象与触发条件"}},[t._v("#")]),t._v(" 编译对象与触发条件")]),t._v(" "),a("p",[t._v("热点代码可以是频繁执行的方法或频繁执行的循环体")]),t._v(" "),a("p",[t._v("通过热点探测技术，判断是否达到触发编译的阈值")]),t._v(" "),a("p",[t._v("1.基于采样的热点探测：周期性检查某个方法是不是经常出现在栈顶，不够精确")]),t._v(" "),a("p",[t._v("2.基于计数器的热点探测：为每个方法/代码块加计数器。不能直接获取到每个方法调用关系，但是更准确")]),t._v(" "),a("p",[t._v("HotSpot使用的是计数器方法。分为方法调用计数器、回边计数器")]),t._v(" "),a("p",[t._v("计数器统计的是一段时间内的调用次数，如果超过时间长度，仍然没有达到阈值，那么计数器的数值会减少一半，称为热度衰减，这段时间称为半衰周期")]),t._v(" "),a("p",[t._v("执行方法前，如果存在已经编译的版本，直接用编译后的本地代码执行。如果不存在已编译的版本，就把计数器+1，当执行方法次数较多，方法计数器与回边计数器之和达到阈值，不是同步的等待编译完成，而是继续按当前解释方式执行字节码，等编译完成，方法入口地址会被改写为新的地址")]),t._v(" "),a("h4",{attrs:{id:"编译过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译过程"}},[t._v("#")]),t._v(" 编译过程")]),t._v(" "),a("p",[t._v("Client Compiler是简单的三段式编译器")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Wu-Corey/image_store/202204301928963.png",alt:"img"}})]),t._v(" "),a("p",[t._v("Server Complier")]),t._v(" "),a("p",[t._v("会执行所有经典优化动作，不稳定激进优化。")]),t._v(" "),a("p",[t._v("它相对Client Compiler代码质量更高，减少本地代码执行时间")]),t._v(" "),a("h3",{attrs:{id:"编译优化技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译优化技术"}},[t._v("#")]),t._v(" 编译优化技术")]),t._v(" "),a("p",[t._v("编译方式执行本地代码比解释方式更快。原因在于1.解释执行需要消耗额外时间2.编译执行有很多优化措施")]),t._v(" "),a("p",[t._v("即时编译器产生的本地代码，会比Javac产生的字节码更优秀")]),t._v(" "),a("h4",{attrs:{id:"公共子表达式消除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共子表达式消除"}},[t._v("#")]),t._v(" 公共子表达式消除")]),t._v(" "),a("p",[t._v("表达式计算出结果，并且表达式内的变量不会改变，那么后续再用到表达式的时候，会直接用结果替换该表达式")]),t._v(" "),a("h4",{attrs:{id:"数组范围检查消除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组范围检查消除"}},[t._v("#")]),t._v(" 数组范围检查消除")]),t._v(" "),a("p",[t._v("对于数组的访问，Java相比于C/C++那样的裸指针操作，它的更加安全在于会进行数组范围的检查，如果超过数组范围，则抛数组越界异常。如果运行的时候，每次对数组读写都检查，性能会降低很多。因此编译期通过数据流分析就可以判断出数组不会越界，运行的时候无需判断了")]),t._v(" "),a("h4",{attrs:{id:"方法内联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法内联"}},[t._v("#")]),t._v(" 方法内联")]),t._v(" "),a("p",[t._v("方法内联可以消除方法调用成本，消除无用代码")]),t._v(" "),a("p",[t._v("非虚方法可以直接内联，虚方法要在运行期才能确定执行的版本，无法直接内联。")]),t._v(" "),a("p",[t._v("解决的方案是，采用类型继承关系分析技术（CHA）")]),t._v(" "),a("ul",[a("li",[t._v("执行虚方法时，向CHA查询此虚方法是否有多个版本，如果只有一个版本，直接内联。这种属于激进优化，预留了一个逃生门，当后续加载到导致继承关系发生变化的新类，就会抛弃已编译的代码，退回到解释状态执行")]),t._v(" "),a("li",[t._v("如果有多个版本，采用内联缓存。调用前缓存为空，调用之后记录版本信息，每次调用前比较版本信息，如果后来的调用的方法接收者版本都一样，内联就一直用下去，如果不一样，就说明真正用到了虚方法的多态，就取消内联，查找虚方法表进行分派")])]),t._v(" "),a("h4",{attrs:{id:"逃逸分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逃逸分析"}},[t._v("#")]),t._v(" 逃逸分析")]),t._v(" "),a("p",[t._v("逃逸：")]),t._v(" "),a("ul",[a("li",[t._v("方法逃逸：对象作为参数传递到其他方法，被外部访问引用")]),t._v(" "),a("li",[t._v("线程逃逸：赋值给类变量或能被其他线程访问到的实例变量")])]),t._v(" "),a("p",[t._v("如果能确定一个对象不会逃逸，即别的方法/线程无法访问到该对象，就可以为这个变量做优化")]),t._v(" "),a("ul",[a("li",[t._v("栈上分配：把不会逃逸的对象分配在栈上，方法执行结束，可以随着栈帧出栈销毁，减少GC压力")]),t._v(" "),a("li",[t._v("同步消除：不会被其他线程访问就没有并发安全问题，不用做同步处理")]),t._v(" "),a("li",[t._v("标量替换：不创建对象，而是创建被这个方法用到的成员变量，分配在栈上")])]),t._v(" "),a("p",[t._v("逃逸分析技术尚不成熟，不能确保基于逃逸分析的优化性能收益高于消耗，而且优化手段的实现也比较复杂")])])}),[],!1,null,null,null);s.default=e.exports}}]);