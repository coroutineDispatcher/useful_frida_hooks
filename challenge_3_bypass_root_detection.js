Java.perform(() => {
    const rootDetector = Java.use("sg.vantagepoint.util.RootDetection")
    const checkRoot1 = rootDetector.checkRoot1
    const checkRoot2 = rootDetector.checkRoot2
    const checkRoot3 = rootDetector.checkRoot3

    // Interestingly important for feedback
    // if (args[0].isNull() === false) {
    //     console.log("Non-null buffer:", args[0].readUtf8String());
    // }    

    checkRoot1.implementation = function () {
        send("Bypassing checker 1")
        return false;
    }

    checkRoot2.implementation = function () {
        send("Bypassing checker 2")
        return false;
    }

    checkRoot3.implementation = function () {
        send("Bypassing checker 3")
        return false;
    }
}
);