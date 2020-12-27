import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import Anecdote from '../../../../components/Anecdote'
import { Link } from '../../../../components/Link'

const view = () =>
<div>
    <h2>Update every frame (https://blender.stackexchange.com/questions/133962/how-to-use-keyframes-and-the-python-api-programmatically)</h2>
    <div>
        def update_scene(scene):
        current_frame_value = scene.frame_current

        if current_frame_value < 100:
            disks[0].scale.x = .05
        elif current_frame_value < 200:
            disks[0].scale.x = .08
        elif current_frame_value > 300:
            disks[0].scale.x = .3
        else:
            disks[0].scale = 1

    bpy.app.handlers.frame_change_pre.append(update_scene)
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
