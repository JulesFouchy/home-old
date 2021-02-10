import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../components/PageView'
import { Link } from '../../../components/Link'
import InlineCode from '../../../components/InlineCode'

const view = () => 
<div>
<iframe width="962" height="541" src="https://www.youtube.com/embed/mCS6Ye1YN5Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>
<i>A single fragment shader ({Link("https://pastebin.com/aewwkHs5", "available here")}), rendered using {Link("https://github.com/IMAC-projects/is0", "is0")}</i>
<br/><br/>
What you see here is a simple sphere, plus two rendering tricks.
<br/><br/>
The main one is inspired by <b>Conformal Geometric Algebra</b>, an alternative way of doing geometry.
<br/>
<b>Geometric Algebra</b> in general is a theory that generalizes many concepts such as complex numbers, quaternions, dual numbers and many more. It offers
a very abstract and powerful way of working with geometric primitives.
<br/>
In particular, <b>3D Conformal Geometric Algebra</b> is a 32-dimensional vector space where both points, pairs of points, directions, lines, planes, circles and spheres can be 
natively represented as (32-dimensional) vectors. Using the many products defined on this algebra, we can express usual operations very
easily.
<br/><br/>
For example we can compute the two intersection points between a ray and the sphere using the so-called <i>outer product</i> between the dual representations of our objects :
<br/>
{InlineCode("intersectionPtPair = dual(outer(dualSphere, dual(rayLine)));")}
<br/>
And note that the two points are represented in a single vector ! From there on we can extract the two points from the pair
and proceed with our rendering as usual. 
<br/><br/>
But now comes the very interesting part : what happens if there is no actual intersection ?
<br/>
Well, we then obtain an <i>imaginary</i> point pair (the "dot product" of the vector with itself is negative).
But it still represents a pair of points nonetheless ! We could check the sign of the "dot product" and discard the negative ones
to get a traditional sphere rendering.
Or we could consider those <i>imaginary</i> point pairs as valid ones and still render them as if they were part of the sphere !
<br/><br/>
And there you are. This is what I did to get this interesting result outside of the regular sphere, and this is why I called it
a <i>complex</i> sphere.
<br/><br/>
The second rendering trick is more mundane.<br/>
What you see rendered is the normals of the sphere. But to make sure that negative values still appear, I take an absolute value.
And finally to get brighter colors I apply a square root, and that's it !
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
