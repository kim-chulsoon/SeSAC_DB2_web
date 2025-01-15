import classNames from "classnames";
import style from "../style/style.module.css";
import Names from "classnames";

export default function ModuleCSS() {
  const setting = Names.bind(style);
  return (
    <div className={style.container}>
      <h4>module css 적용</h4>
      <div className={style.box2}>
        <div>안녕</div>
      </div>
      <br />
      <div className={`${style.first} ${style.second}`}>
        클래스를 여러 개 지정하는 방법1(탬플릿 리터럴)
      </div>
      <div className={[style.first, style.second].join(" ")}>
        클래스를 여러 개 지정하는 방법2(배열과 join 이용)
      </div>
      <div className={classNames(style.first, style.second)}>
        클래스를 여러 개 지정하는 방법3(classnames 모듈 설치)
      </div>
      <div className={setting("first", "second")}>
        classname 모듈 사용 더 해보기
      </div>
    </div>
  );
}
