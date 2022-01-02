/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { Frame, Observable } from "@nativescript/core"

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/

export function onNavigatingTo(args) {
  const page = args.object

  const bindingContext = new Observable()
  bindingContext.onTap = () => {
    console.log(`navigating the nested frame`)
    // Navigate the frame 'nested' to a new page
    return Frame.getFrameById('nested').navigate('nested-nav-destination')
  }
  page.bindingContext = bindingContext
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
