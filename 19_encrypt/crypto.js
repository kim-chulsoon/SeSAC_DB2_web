const crypto = require("crypto");

// 단방향 암호화
// createHash(알고리즘)
// pdkdf2Sync(비밀번호, 솔트, 반복 횟수, 키의 길이, 알고리즘)

// createHash(알고리즘).update(평문).digest(인코딩 방식)
// 인코딩 방식 : base64, hex, ascii, binary
const createHashPw = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

// 함수 호출
console.log(createHashPw("1234"));
console.log(createHashPw("1234"));
console.log(createHashPw("1234"));
console.log(createHashPw("1234"));

// pdkdf2Sync(비밀번호, 솔트, 반복 횟수, 키의 길이, 알고리즘).toString(인코딩방식)
function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm)
    .toString("base64");

  return { salt, hash };
}

console.log(saltAndHashPw("1234"));
console.log(saltAndHashPw("1234"));
console.log(saltAndHashPw("1234"));
console.log(saltAndHashPw("1234"));

// 암호비교함수
function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm)
    .toString("base64");

  return hash === savedHash;
}
console.log("===============================================");
const realPw = "qwer1234";
const data = saltAndHashPw(realPw);
console.log(data);
const { salt: DBsalt, hash: DBhash } = data;
console.log("=========== 비밀번호 일치 여부 =============");
const isMatch = checkPw("qwer1234!", DBsalt, DBhash);
const isMatch2 = checkPw("qwer1234", DBsalt, DBhash);
console.log(isMatch);
console.log(isMatch2);

// =======================================================================
// 양방향 알고리즘
// createCipheriv : 암호화
// createDecipheriv : 복호화

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const algorithm = "aes-256-cbc";
const originalMessage = "hello, world!";

// 암호화
function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf-8", "base64");

  encrypted += cipher.final("base64");

  return encrypted;
}
console.log(encrypt(originalMessage));
console.log(encrypt(originalMessage));
// 복호화
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText, "base64", "utf-8");

  decrypted += decipher.final("utf8");

  return decrypted;
}
const encryptedMessage = encrypt(originalMessage);
console.log("암호화된 문장", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log("복호화된 문장", decryptedMessage);
