(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{335:function(e,t,o){e.exports=o.p+"assets/img/ssdttime.54f2ba0d.png"},393:function(e,t,o){"use strict";o.r(t);var r=o(10),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ssdts-the-easy-way"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssdts-the-easy-way"}},[e._v("#")]),e._v(" SSDTs: The easy way")]),e._v(" "),t("p",[e._v("So here we'll be using a super simple tool made by CorpNewt: "),t("a",{attrs:{href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDTTime"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("What this tool does is, it dumps your DSDT from your firmware, and then creates SSDTs based off your DSDT. "),t("strong",[e._v("This must be done on the target machine running either Windows or Linux")])]),e._v(" "),t("h2",{attrs:{id:"so-what-can-t-ssdttime-do"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#so-what-can-t-ssdttime-do"}},[e._v("#")]),e._v(" So what "),t("strong",[e._v("CAN'T")]),e._v(" SSDTTime do")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("SSDT-PNLF")]),e._v(":\n"),t("ul",[t("li",[e._v("Need to be configured to your system")])])]),e._v(" "),t("li",[t("strong",[e._v("SSDT-GPI0")]),e._v(":\n"),t("ul",[t("li",[e._v("Need to be configured to your system")])])]),e._v(" "),t("li",[t("strong",[e._v("USBX SSDT")]),e._v(":\n"),t("ul",[t("li",[e._v("This is included on sample SSDTs but SSDTTime only makes the SSDT-EC part, Skylake and newer users can grab a pre-built here: "),t("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-USBX.aml"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("IMEI SSDT")]),e._v(":\n"),t("ul",[t("li",[e._v("If you have either a Sandy bridge CPU with 7 series motherboard or Ivy Bridge with 6 series motherboard, you'll need to either use the prebuilt or manually create it.")])])]),e._v(" "),t("li",[t("strong",[e._v("RTC0 RANGE SSDT")]),e._v(":\nIf you have X99 or X299, you'll need to configure it to your system")])]),e._v(" "),t("p",[e._v('For users who don\'t have all the options available to them in SSDTTime, you can follow the "SSDTs: The long way" section. You can still use SSDTTime for SSDTs it does support.')]),e._v(" "),t("h2",{attrs:{id:"running-ssdttime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-ssdttime"}},[e._v("#")]),e._v(" Running SSDTTime")]),e._v(" "),t("p",[e._v("Run the "),t("code",[e._v("SSDTTime.bat")]),e._v(" file as Admin on the target machine and you should see something like this:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(335),alt:""}})]),e._v(" "),t("p",[e._v("What are all these options?:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("1. FixHPET - Patch out IRQ Conflicts")]),e._v(" "),t("ul",[t("li",[e._v("IRQ patching, mainly needed for X79, X99 and laptop users(use option "),t("code",[e._v("C")]),e._v(" to omit conflicting legacy IRQs)")])])]),e._v(" "),t("li",[t("code",[e._v("2. FakeEC - OS-aware Fake EC")]),e._v(" "),t("ul",[t("li",[e._v("This is the SSDT-EC, required for Catalina users")])])]),e._v(" "),t("li",[t("code",[e._v("3. FakeEC Laptop - OS-aware Fake EC")]),e._v(" "),t("ul",[t("li",[e._v("This is the SSDT-EC, but the laptop version only Builds Fake EC and leaves the existing EC devices untouched, again required for Catalina users")])])]),e._v(" "),t("li",[t("code",[e._v("4. PluginType - Sets plugin-type = 1 on First ProcessorObj")]),e._v(" "),t("ul",[t("li",[e._v("This is the SSDT-PLUG, for Intel only")])])]),e._v(" "),t("li",[t("code",[e._v("5. PMC - Sets Power Management controller status")]),e._v(" "),t("ul",[t("li",[e._v("This is the SSDT-PMC, for Intel true 300+ series only, this device is missing from ACPI in recent boards and helps to bring back NVRAM support.")])])]),e._v(" "),t("li",[t("code",[e._v("6. AWAC - Context-Aware AWAC Disable and RTC Fake")]),e._v(" "),t("ul",[t("li",[e._v("This is the SSDT-AWAC/RTC0, its purpose  is to fix the system clocks found on newer hardware")])])]),e._v(" "),t("li",[t("code",[e._v("7. USB Reset - Reset USB controllers to allow hardware mapping")]),e._v(" "),t("ul",[t("li",[e._v("This is SSDT-RHUB, used for resetting USB ports in macOS for Asus's Z490 motherboards")])])]),e._v(" "),t("li",[t("code",[e._v("8. Dump DSDT - Automatically dump the system DSDT")]),e._v(" "),t("ul",[t("li",[e._v("Dumps your DSDT from your firmware")])])])]),e._v(" "),t("p",[e._v("What we want to do is select option "),t("code",[e._v("8. Dump DSDT")]),e._v(" first, then select the appropriate option(s) for your system.")]),e._v(" "),t("blockquote",[t("p",[e._v("What about USBX?")])]),e._v(" "),t("p",[e._v("For Skylake and newer plus AMD, you can grab a pre-built file here: "),t("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-USBX.aml"),t("OutboundLink")],1),e._v(". This file is plug and play and requires no device configuration, "),t("strong",[e._v("do not use on Broadwell and older")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Troubleshooting note")]),e._v(": See "),t("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/troubleshooting/troubleshooting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("General Troubleshooting"),t("OutboundLink")],1),e._v(" if you're having issues running SSDTTime")]),e._v(" "),t("h2",{attrs:{id:"adding-to-opencore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-to-opencore"}},[e._v("#")]),e._v(" Adding to OpenCore")]),e._v(" "),t("p",[e._v("Don't forget that SSDTs need to be added to OpenCore, reminder that .aml is complied, .dsl is code. "),t("strong",[e._v("Add only the .aml file")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("EFI/OC/ACPI")]),e._v(" "),t("li",[e._v("config.plist -> ACPI -> Add")])]),e._v(" "),t("p",[e._v("Reminder that Cmd/Ctrl+R with ProperTree pointed at your OC folder will add all your SSDTs, kexts and .efi drivers to the config for you. "),t("strong",[e._v("Do not add your DSDT to OpenCore, its already in your firmware")]),e._v(". If you are unsure what this is referring to, go back to the OpenCore guide and select your config based of the architecture of your CPU.")]),e._v(" "),t("p",[e._v("For those who do not yet have a config.plist, you'll want to next head back to your respective OpenCore guides and create the config.plist:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore Install guide"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Users of "),t("code",[e._v("FixHPET")]),e._v(" will also need to merge oc_patches.plist into their config.plist")]),e._v(" "),t("p",[e._v("Steps to do this:")]),e._v(" "),t("ul",[t("li",[e._v("Open both files,")]),e._v(" "),t("li",[e._v("Delete the "),t("code",[e._v("ACPI -> Patch")]),e._v(" section from config.plist")]),e._v(" "),t("li",[e._v("Copy the "),t("code",[e._v("ACPI -> Patch")]),e._v(" section from patches.plist")]),e._v(" "),t("li",[e._v("Paste into where old patches were in config.plist")])])])}),[],!1,null,null,null);t.default=s.exports}}]);