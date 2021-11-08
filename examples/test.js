const ThermalPrinter = require("../node-thermal-printer").printer;
const PrinterTypes = require("../node-thermal-printer").types;


async function test() {
    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,                                  // Printer type: 'star' or 'epson'
        interface: 'tcp://192.168.123.100',                       // Printer interface
        characterSet: 'SLOVENIA',                                 // Printer character set - default: SLOVENIA
        removeSpecialCharacters: false,                           // Removes special characters - default: false
        lineCharacter: "=",                                       // Set character for lines - default: "-"
        options: {                                                 // Additional options
            timeout: 5000                                           // Connection timeout (ms) [applicable only for network printers] - default: 3000
        }
    });
    /*let isConnected = await printer.isPrinterConnected();
    console.log('isConnected ', isConnected);*/

    //let raw = await printer.raw(Buffer.from("สวัสดี"));
    // console.log('raw ', raw);
    await printer.printImage('./assets/olaii-logo-black-small.png');
    // printer.cut();
    // printer.getStatusCustom();
    // printer.beep();
    try {
        await printer.execute();

        console.log("Print success.");
    } catch (error) {
        console.error("Print error:", error);
    }
}


test();