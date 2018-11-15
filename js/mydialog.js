function noticeDialog(text) {
    $(document).dialog({
        type: "notice",
        infoText: text,
        autoClose: 1500,
        position: "center" // center: 居中; bottom: 底部
    });
}