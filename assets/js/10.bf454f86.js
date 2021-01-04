(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{368:function(e,t,a){e.exports=a.p+"assets/img/devicemanager.770a10fc.png"},369:function(e,t,a){e.exports=a.p+"assets/img/ssdt-before.f71c9e04.png"},370:function(e,t,a){e.exports=a.p+"assets/img/ssdt-after.28584bc4.png"},421:function(e,t,a){"use strict";a.r(t);var s=a(25),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"fixing-backlight-manual"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixing-backlight-manual"}},[e._v("#")]),e._v(" Fixing Backlight: Manual")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#finding-the-acpi-path"}},[e._v("Finding the ACPI path")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#compiling-the-ssdt"}},[e._v("Compiling the SSDT")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#wrapping-up"}},[e._v("Wrapping up")])])]),e._v(" "),s("h2",{attrs:{id:"finding-the-acpi-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-acpi-path"}},[e._v("#")]),e._v(" Finding the ACPI path")]),e._v(" "),s("p",[e._v("For this guide, we're gonna assume Windows is already on this laptop, as otherwise creating this SSDT is a bit more difficult.")]),e._v(" "),s("p",[e._v("Now open DeviceManager, and head to the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Device Manager -> Display Adapters -> Properties -> Details > BIOS device name\n")])])]),s("ul",[s("li",[e._v('Note some GPU ACPI pathing may be hiding under "BIOS device name"')])]),e._v(" "),s("p",[s("img",{attrs:{src:a(368),alt:"Credit to 1Revenger1 for the image"}})]),e._v(" "),s("p",[e._v("From the above example, we can see our display is hooked up to "),s("code",[e._v("PCI0.GFX0")])]),e._v(" "),s("h2",{attrs:{id:"edits-to-the-sample-ssdt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("#")]),e._v(" Edits to the sample SSDT")]),e._v(" "),s("p",[e._v("Now that we have our ACPI path, lets grab our SSDT and get to work:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-PNLF.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PNLF.dsl"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-PNLFCFL.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PNLFCFL.dsl"),s("OutboundLink")],1),e._v(" "),s("ul",[s("li",[e._v("For Coffee Lake and newer")])])])]),e._v(" "),s("p",[e._v("By default, this uses "),s("code",[e._v("PCI0.GFX0")]),e._v(" for the pathing. you'll want to rename accordingly. For this example, we'll assume your pathing is "),s("code",[e._v("PCI0.GPU0")]),e._v(":")]),e._v(" "),s("p",[s("strong",[e._v("Before")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("External (_SB_.PCI0.GFX0, DeviceObj) <- Rename this\n\nScope (_SB.PCI0.GFX0) <- Rename this\n\nDevice(_SB.PCI0.GFX0.PNLF) <- Rename this\n")])])]),s("p",[s("img",{attrs:{src:a(369),alt:""}})]),e._v(" "),s("p",[e._v("Following the example pathing we found, the SSDT should look something like this:")]),e._v(" "),s("p",[s("strong",[e._v("After")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("External (_SB_.PCI0.GPU0, DeviceObj) <- Renamed\n\nScope (_SB.PCI0.GPU0) <- Renamed\n\nDevice(_SB.PCI0.GPU0.PNLF) <- Renamed\n")])])]),s("p",[s("img",{attrs:{src:a(370),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"compiling-the-ssdt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-ssdt"}},[e._v("#")]),e._v(" Compiling the SSDT")]),e._v(" "),s("p",[e._v("With the SSDT done, you're now "),s("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("ready to compile the SSDT!")])],1),e._v(" "),s("h2",{attrs:{id:"wrapping-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up"}},[e._v("#")]),e._v(" Wrapping up")]),e._v(" "),s("p",[e._v("Once you're done making your SSDT, either head to the next page to finish the rest of the SSDTs or head here if you're ready to wrap up:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/cleanup.html"}},[s("strong",[e._v("Cleanup")])])],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);