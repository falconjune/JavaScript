const http = require('http');

http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server!</p>');
})

	.listen(8080, () => {
		console.log('8080번 포트에서 서버 대기중!');
	});
/*
createServer 메서드 뒤에 listen 메서드를 붙여 클라이언트에 공개할 포트와
포트 연결 완료 후 실행될 콜백 함수를 넣는다.

res 객체에는 .writeHead와 .write, .end 메서드가 있다.
wrtieHead는 응답에 대한 기록. 200성공 2번째 인수로 HTML임을 알리고 있음.
write의 첫 번째 인수는 클라이언트로 보낼 데이터.
end는 응답을 종료하는 메서드. 인수가 있다면 그 데이터도 클라이언트로 
보내고 응답을 종료
브라우저는 응답 내용을 받아서 렌더링한다.

*/
