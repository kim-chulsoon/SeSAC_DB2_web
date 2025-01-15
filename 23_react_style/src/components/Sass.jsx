import "../style/Sass.scss";
import sesac from "../img/main.png";

export default function Sass() {
  return (
    <>
      <h4>SASS 사용(.scss)</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">btn1</button>
        <button className="btn btn--opacity">btn2</button>
        <button className="btn btn--blue">btn3</button>
      </div>

      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>

      <div>
        <h2>이미지 가져오기</h2>
        <h4>1. src 폴더 내부의 이미지</h4>
        <h5>경로명으로 가져오기(상대경로)</h5>
        <img
          src="../img/apple.jpg"
          alt="src 내부의 사진은 경로명으로 바로 접근 불가"
        />
        <h5>import 후에 가져오기</h5>
        <img src={sesac} alt="import 후 가져오기" />
        <h5>css에서 background-image 속성으로 접근하기</h5>
        <div className="src-img img-test"></div>

        <h4>2. public 폴더 내부의 이미지</h4>
        <h5>img 태그</h5>
        <img
          src="/assets/main.png"
          alt="public 폴더 내부에서는 경로명으로 접근 가능, /로 바로 접근"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/main.png"}
          alt="process.env.PUBLIC_URL로 접근하면 조금 더 안전함"
        />

        <h5>css에서 background-image 속성으로 접근하기</h5>
        <div className="public-img img-test"></div>
      </div>

      <div className="practice">
        <h4>실습문제</h4>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
