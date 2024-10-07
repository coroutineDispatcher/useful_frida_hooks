Java.perform(() => {
    const rootDetector = Java.use("sg.vantagepoint.util.RootDetection")
    const checkRoot1 = rootDetector.checkRoot1
    const checkRoot2 = rootDetector.checkRoot2
    const checkRoot3 = rootDetector.checkRoot3

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