
// ==========================================
// [Google Apps Script 코드] - 사용 가이드
// ==========================================
/*
    이 코드는 구글 스프레드시트의 "확장 프로그램" > "Apps Script"에 붙여넣어 사용합니다.
    
    1. 새 구글 스프레드시트를 만드세요.
    2. 상단 메뉴에서 [확장 프로그램] -> [Apps Script]를 클릭하세요.
    3. 기존 코드를 모두 지우고, 아래 코드를 복사해서 붙여넣으세요.
    4. 디스켓 아이콘(저장)을 누르고, 프로젝트 이름을 "Momento Form" 등으로 저장하세요.
    5. 상단 [배포] -> [새 배포]를 클릭하세요.
    6. 유형 선택(톱니바퀴) -> [웹 앱]을 선택하세요.
    7. 설정:
       - 설명: "Contact Form"
       - 다음 사용자로서 실행: "나 (Me)"
       - 액세스 권한이 있는 사용자: "모든 사용자 (Anyone)"  <-- **중요!**
    8. [배포] 버튼을 누르고, "웹 앱 URL"을 복사하세요.
    9. 복사한 URL을 저(AI)에게 알려주시면 사이트와 연동해 드립니다!
*/

function doPost(e) {
    // 1. 현재 활성화된 시트 가져오기
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 2. 전달받은 데이터 파싱 (JSON 또는 폼 데이터)
    var data;
    try {
        // JSON 데이터로 시도
        data = JSON.parse(e.postData.contents);
    } catch (err) {
        // 실패 시 파라미터 맵 사용
        data = e.parameter;
    }

    // 3. 시간 기록
    var timestamp = new Date();

    // 4. 데이터 추출
    var name = data.name;
    var phone = data.phone;
    var category = data.category;
    var date = data.date;
    var time = data.time;
    var message = data.message;

    // 5. 시트에 행 추가 (순서대로)
    sheet.appendRow([timestamp, name, phone, category, date, time, message]);

    // 6. 성공 응답 반환 (CORS 문제 방지용 JSON)
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}

// 초기 헤더 설정용 함수 (한 번만 실행하면 됨)
function setupSheet() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var headers = ["타임스탬프", "이름", "연락처", "상담종류", "방문날짜", "방문시간", "문의내용"];
    sheet.appendRow(headers);
} // 이 함수를 선택하고 "실행" 버튼을 누르면 첫 줄에 헤더가 생깁니다.
