### Vue-VueX

#### VueX

- Vue.js 애플리케이션에 대한 상태관리패턴 + 라이브러리 (여기서 상태 = status)
- 애플리케이션 모든 컴포넌트들 중앙 저장소 역할 (데이터 관리)
- 부모 자식 단계 복잡하면 데이터 전달하는 부분이 매우 복잡해져 (그런걸 VueX가 해결)
- 애플리케이션이 다양한 컴포넌트들로 구성되고 더 커지면 데이터 공유 문제 발생(이럴 때 VueX가 해결)
- devtools 확장프로그램과 통합되어 고급 기능 제공

##### VueX

- 부모노드에서 깊이 자식으로 내려갔어. props로 관리하는데, 이렇게 관리하면 데이터의 흐름이 직관적으로 보이는 장점이 있지만 깊이가 깊어질 수록 관리가 매우 어렵다.

  (예를들어, A쪽으로 내려간 C라는 데이터랑, B자식쪽으로 내려간 C라는 데이터가 있어, 여기서 A쪽의 C가 변경이 되었을 경우 이 변경된 데이터를 어떻게 C에게 동일하게 전달하는가? 깊이가 깊어질수록 너무 힘들다.)



#### 비 부모-자식간 통신

- 비어있는 Vue Instance 객체를 Event Bus로 만들어서 그 빈 객체에 이벤트만 빢빢 넣어준다.

![image-20220509134542974](Vue-VueX.assets/image-20220509134542974.png)

- 근데 이거도 너무 복잡해
- 그냥 중앙에서 하겠따! 그게 Vuex

![image-20220509134622125](Vue-VueX.assets/image-20220509134622125.png)

- 저장소를 하나 만들어서 거기서 꺼내서 계속 쓰는 느낌 그렇다고 이게 DB는 아니다. 그저 데이터를 모아서 관리하는 공간일 뿐

- 중앙에서 관리. A가 A' 로 바뀌면 알아서 동기화 되어서 다른데에서 쓰인다.

  ![image-20220509134650712](Vue-VueX.assets/image-20220509134650712.png)

#### 상태관리패턴

- 상태(data)는 앱을 작동하는 원본 소스
- 뷰(template)는 상태의 선언적 매핑
- 액션(method)은 뷰에서 사용자 입력에 대해 반응적으로 상태를 바꾸는 방법
- 밑에서 이제 data 그러니까 상태라고 표현된 부분들을 전부 뽑아서, 어느 한 군데서 관리를 하겠다. 하는게 Vuex 기본적인 개념.
- ![image-20220509134929054](Vue-VueX.assets/image-20220509134929054.png)



#### Vuex 핵심컨셉

![image-20220509135503492](Vue-VueX.assets/image-20220509135503492.png)



- state = 상태 / 데이터

- action = 어떤 상태를 method를 통해 변화를 주겠다.

  components에서 dispatch로 action을 호출하면, 필요하다면 Backedn API와 통신을 주고 받고, 그게 아니라면 적당히 내부적으로 처리해서 commit을 해서 Mutations(변이)를 부른다.

- Mutations 는 변이 인데, 이걸 통해서 내가 원래 갖고 있던 State(상태)를 바꿀수 있다.

- 위의 Backend API는 restAPI 될것이다.

##### 유의

- Actions에서도 원래 State에 접근 가능. 근데 이렇게 하지 말라 한다 왜?
- Component에서도 State에 바로 접근할 수 있고, Mutations도 호출 가능 근데 하지말라 한다 왜?
- 명확하게 역할부분을 주어서 나중에 편하게 관리할 수 있도록 하려고.
- Spring Boot에서 Service Dao 나누는거랑 비슷한 격.
- Action은 비동기통신이 되고,  Mutations은 비동기통신 안되고 동기적통신만 허용(얘는 명확하게)
- 비동기가 뭐시냐? 응답이 오기전에 다른일 하러 가는. 언제 완료될 지 모르는 일처리방식.

##### 동기적 통신 & 비동기적 통신 이란?



#### Vuex 저장소 개념

https://v3.vuex.vuejs.org/kr/guide/state.html 

- State: 단일 상태 트리 사용, 애플리케이션 마다 하나의 저장소 관리(Data)

  - Vuex는 단일 상태 트리사용

  - 단일 객체는 모든 애플리케이션 수준의 상태를 포함하며 "원본 소스"의 역할

  - 각 애플리케이션 마다 하나의 저장소만 갖게 됨을 의미

  - 애플리케이션에서 공유해야 할 data관리

  - State에 접근 방식 : this.$store.state.데이터이름

  - computed를 사용하여 데이터를 가져와 사용 가능함

    값이 변경되며 해당 state를 공유하는 여러 컴포넌트의 DOM은 (알아서)렌더링

*그렇다고 모든 상태를 Vuex에서 관리해야 하는 건 아니다.*

*Vuex에 모든걸 다 저장하면 좀 코드가 장황하고 지저분해질 수 있음*

- Getters: Vue Instance의 computed와 같은 역할 , State를 기반으로 계산(Computed)

  https://v3.vuex.vuejs.org/kr/guide/getters.html 

  - State 변경하지 않고 활용하여 계산 수행(Computed속성과 유사)
  - 실제 계산된 값을 사용하는 것 처럼 getters는 저장소의 상태를 기준으로 계산
  - computed 속성과 마찬가지로 state 종속성에 따라 캐시되고, 일부 종속성이 변경된 경우에만 다시 재계산
  - getters 자체가 state를 변경하진 않음

- Mutations: State의 상태를 변경하는 유일한 방법(methods)

  https://v3.vuex.vuejs.org/kr/guide/mutations.html

  페이로드를 가진 커밋 부분 읽어보기

  변이는 무조건 동기적이어야한다. 

  - Vuex 저장소에서 실제로 상태를 변경하는 유일한 방법 

  - 각 컴포넌트에서 State의 값을 직접 변경하는 것은 권하지 않아.

  - mutation의 핸들러 함수는 반드시 동기적

    비동기 콜백함수의 실제로 호출 시기를 알수 있는 방법이 없어, 추적 x

  - 첫번째 인자로 항상 state를 받아

  - Mutations는 직접 호출 불가, store.commit('정의된 이름(뮤테이션에서 정의한 메소드 이름)') 으로 호출

  - Actions에서 commit()메소드에 의해 호출

- Actions: 상태를 변이 시키는 대신 액션으로 변이(Mutations)에 대한 커밋 처리 (비동기 Methods)

  https://v3.vuex.vuejs.org/kr/guide/actions.html

  - state를 변이시키는 대신 commit() 메서드를 통해 mutations 호출

  - 비동기 작업의 결과를 적용하려 할 때 사용(Backend API 통신 등)

  - context 객체 인자 받아

    store.index.js 파일 내에 있는 모든 요소의 속성 접근 & 메서드 호출 가능

    state 를직접 변경할 수 있지만 하지 말기: 명확한 역할 분담 하여 올바르게 상태 관리

  - 컴포넌트에서 dispatch( )메서드에 의해 호출



#### Vuex는 언제 쓰나?

Vue는 공유된 상태 관리는 처리하는 데 유용하나, 개념에 대한 이해와 시작하는 비용도 함께 발생.

앱이 단순하다면, Vuex없이 괜찮을 수 있다(간단한 글로벌 이벤트 버스 OK)

중대형 규모의 SPA를 구축하는 경우 Vue 컴포넌트 외부의 상태를 보다 잘 처리할 수 있는 방법을 생각하게 될 가능성이 있게 되고, 자연스럽게 Vuex를 선택할 수 있는 단계가 됨.

필요한 순간에 활용할 것

Flux라이브러리는 안경과 같다. 필요할 떄 알아볼 수 있다 (Dan Abramov)



#### Vuex 설치

- CDN

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>
```

- NPM 

  npm install vuex --save

- Vue CLI

  vue add vuex(프로젝트를 진행하던 중에 추가하게 되면 ~~app.vue덮어쓰니까~~ 백업하고 추가 //애는 아니다. )

#### Vuex 실습



#### Vue에서 로컬스토리지 사용하기

##### npm

```npm
npm install --save vuex-persistedstate
```

##### yarn

```yarn
yarn add vuex-persistedstate
```

##### index.js

```js
//기본 설정
import createPersistedState from "vuex-persistedstate"; 
const store = new Vuex.Store({ 
// ... 
plugins: [createPersistedState()], 

});
```

```js
//선택한 모듈만 설정
import Vue from "vue"; 
import Vuex from "vuex"; 
import createPersistedState from "vuex-persistedstate"; 

import { Auth } from "./auth"; 
import { Cart } from "./cart"; 
import { Products } from "./products"; 

Vue.use(Vuex);

export default new Vuex.Store({ 
modules: { 
		auth: Auth, 
		cart: Cart,
		products: Products, 
}, 
plugins: [ 
		createPersistedState({ 
		//주목! : 여기에 쓴 모듈만 저장됩니다. 
		paths: ["cart","auth"], 
		}), 
	], 
});

```

