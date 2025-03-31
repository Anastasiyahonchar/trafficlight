function doGet(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("lights");
    const rows = sheet.getDataRange().getValues();
    const jsonData = [];

    for (let i = 1; i < rows.length; i++) {
        jsonData.push({
            id: rows[i][0].toString(),
            color: rows[i][1],
            description: rows[i][2],
            clickcount: rows[i][3],
            isActive: rows[i][4]
        });
    }
    
    return ContentService.createTextOutput(JSON.stringify(jsonData))
        .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("lights");
    const data = JSON.parse(e.postData.contents);

    for (let i = 0; i < data.length; i++) {  
        const light = data[i];  
        sheet.getRange(i + 2, 4).setValue(light.clickcount); 
        sheet.getRange(i + 2, 5).setValue(light.isActive);  
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}