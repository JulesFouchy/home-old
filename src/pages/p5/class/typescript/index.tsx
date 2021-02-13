import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import { Link } from '../../../../components/Link'
import InlineCode from '../../../../components/InlineCode'
import { isBoolean } from 'util'

const view = () =>
<div>
    <div className="highlight">
        Typescript is <b>exactly the same</b> as Javascript, with <i>optional</i> types on top of it.
    </div>
    <h2>How do you use types in Typescript ?</h2>
    You can (optionally) specify a type after a variable, by using a colon : {InlineCode('const x: number')}.
    <br/>
    It is very usefull to specify the types expected by a function : 
    <br/><br/>
    {InlineCode('function doSomething(x: number, y: number, title: string): number { . . . }')}
    <br/>
    The above function takes two numbers and a string, and returns a number.
    <br/><br/>
    <div className="highlight">
        Having precise type definitions allows your IDE to give you much better errors and warnings, and it makes your life a lot easier !
    </div>
    <br/>
    If you still want the possibility for a variable to have multiple types, you can use a union : 
    <br/>
    {InlineCode('const x: number | string')}
    <br/><br/>
    If you want optional arguments, declare them with a {InlineCode('?')} : 
    <br/>
    {InlineCode('function doSomething(x: number, y: number, title?: string): number { . . . }')}
    <br/>
    Here {InlineCode('title')} is an optional parameter.
    <br/><br/>
    <div className="highlight">
        And Typescript has many more nice features : <i>enums</i>, better <i>classes</i>, <i>objects</i> with well-defined fields (called <i>interface</i>) <i>etc.</i>
        <br/>
        Check this out if you want to know more : {Link('https://www.typescriptlang.org/docs/handbook/intro.html', 'Typescript Handbook')}
    </div>
    <br/>

    <h2>How do you use Javascript ?</h2>
    We won't need much knowledge of Javascript for this class.
    <br/>
    The only thing I want you to remember is the proper way of declaring variables :
    <br/><br/>
    <div className="highlight">
        Use {InlineCode('const')}, or {InlineCode('let')}.
    </div>
    <br/>
    {InlineCode('const x = 10')}
    <br/>
    A variable declared with {InlineCode('const')} cannot be changed afterwards. It is a good practice to try using {InlineCode('const')} as often as possible.
    <br/><br/>
    {InlineCode('let x = 10')}
    <br/>
    If you need a mutable variable, then it is perfectly fine to declare it with {InlineCode('let')}.
    <br/><br/>
    And please, please forget {InlineCode('var')}. It is the old way of declaring variables and it can have confusing behaviour,
    so we introduced {InlineCode('const')} and {InlineCode('let')} in the language to replace {InlineCode('var')}. Never ever use {InlineCode('var')} again.
    <br/><br/>
    <div className="highlight">
        <b>Good to know</b> : in Javascript the semicolons at the end of every line are not required. It is only a stylistic choice and I'll let you decide which convention you prefer.
    </div>
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
