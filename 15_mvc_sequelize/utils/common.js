// jsdocs
/**
 * 서버 에러가 났을 때 실행될 코드 모음
 * @param {response} res 실제 에러 전달
 * @param {Error} err 실제 에러 전달
 * @param {string} errMsgServer 서버 콘솔에 msg 전달
 * @param {string} errMsgInClient 클라이언트에 msg 전달
 * @param {number} statusCode 에러 상태 코드
 */

exports.errorlogs = (
  res,
  err,
  errMsgServer = "error",
  errMsgInClient = "internal server error",
  statusCode = 500
) => {
  console.log(errMsgServer, err);
  res.status(statusCode).send(errMsgInClient);
};
