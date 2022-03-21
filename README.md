# useJestFramework

#### 이 프로젝트는 드림코딩아카데미 수업을 수강하면서 진행한 것입니다.

### 테스트란 ?
- 테스트란: 소프트웨어 테스트, 제품이나 서비스의 품질을 확인, 소프트웨어의 버그를 찾음. 제품이 원하는대로, 예상하는 대로 동작하는지 확인하고 검증하는 단계(함수, 특정기능, ui, 성능, api스펙 등)
- 플랫폼, 목표, 환경 → 다양한 테스트
- 특정한 기능을 수행하는 코드 → 테스트 코드를 작성 → 우리가 확인하고자 하는 함수, 기능, ui, 성능, api스펙을 위한 테스트 코드 작성(다양한 테스트 라이브러리가 있음)

---

- 언제 테스트 코드를 작성하는 것이 좋은가요?
1. 옛날 Dev → QA → Publish (이 때는 QA비용이 커질 수 있음, automated QA로 변화해옴)
2. 지금은 개발 + 테스트 방식으로 변화 : 자동화로 인해 속도가 빨라지고 테스트 코드를 쉽게 작성, 높은 커버리지 장점이 있음 (Dev+automated QA → QA → Publish)바뀜

---

- 테스트를 하는 이유?
1. 기능이 정상 동작하는지 확인
2. 요구 사항 만족
3. 이슈에 대해 예측
4. 버그를 빠르게 발견
5. 자신감 있게 리팩토링
6. 손쉬운 유지 보수
7. 코드의 품질 향상
8. 코드간 의존성을 낮춤
9. 좋은 문서화
10. 개발 시간을 절약

---

- 꼭 알아야 하는 테스트 피라미드 ( unit test > integration > endtoend )
1. Unit Test (단위테스트 - 함수, 모듈, 클래스), cheap, fast
2. Interation Test (통합테스트 - 모듈들, 클래스들)
3. End-to-End Test (사용자 테스트, UI 테스트), expensive, slow

---

- TDD (Test driven Development)

(Re)Write test code → Run Tests → Write only enough Code → Run Tests → rewrite test code

테스트 코드 먼저 작성 → code + test(code review 이전) repository, merge

언제? 요구사항이 명확할 때, 비지니스 로직을 짤 때, 협업시 명세서(문서) 역할을 하도록, 설계에 대한 고민이 필요할 때

![20201127175125_ivuceleb](https://user-images.githubusercontent.com/90097736/159206700-2a679150-0ebf-4262-8952-5493ef41a96c.png)
[https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS6706987091](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS6706987091)

그럼 언제 안함? ui를 작성할 땐 TDD하지 않음

---

- CI/CD ? 어플리케이션 개발 단계부터 배포 때까지의 모든 단계들을 자동화를 통해 조금 더 효율적이고 빠르게 사용자에게 빈번히 배포할 수 있도록 만드는 것
Continues integration(지속적인 통합)
1. 코드 변경사항을 주기적으로 빈번하게 merge해야 한다. : 최대한 작은 단위로 나눠서 개발하고 통합해 나가는 것이 중요
2. 통합을 위한 단계(빌드, 테스트, 머지)의 자동화: 개발자가 코드를 repository에 올리면,CI service를 통해 자동으로 build, test되는 것
→ 장점: 개발 생산성 향상, 문제점 빠르게 발견, 버그 수정 용이 ⇒ 코드 퀄리티 향상(개발자들이 unit test를 해야하므로..)

code → build → test → release → deploy

CI/CD를 위한 tool? 
Jenkins buildkite, github actions, gitlab CI/CD, circle, bitbucket pipeline 

Continues Deployment(Delivery)
1. Prepare release → deploy release

지속적인 통합 : 코드 변경사항을 주기적으로 빈번하게 머지해야 한다(테스트 코드 포함) → 통합을 위한 단계(빌드, 테스트, 머지)의 자동화

### 유닛테스트
- jest, watchall, watch의 차이점
- watchall은 모든 파일의 test파일을 테스트
- git을 이용하고 있다면 변경된 파일만 추적하는 watch를 사용하는 것이 좋음
    
<img width="1103" alt="스크린샷 2022-01-24 14 30 05" src="https://user-images.githubusercontent.com/90097736/159206736-df22396d-84c5-469d-ae7d-433864d359ae.png">

- Promise 등 비동기 함수 테스트하기
<img width="1100" alt="스크린샷 2022-01-24 15 32 07" src="https://user-images.githubusercontent.com/90097736/159206744-994ed25a-2b58-4e57-abb4-d65b8ab8e56f.png">

### 좋은 테스트의 원칙

1) 한번 작성된 테스트 코드는 영원히 유지보수 해야 한다.
2) 내부 구현 사항을 테스트하면 안됨, 사용자 입장에서 테스트
3) 재사용성을 높이기 위해(테스트 유틸리티)
4) 배포용 코드와 철저히 분리
5) 테스트코드를 통한 문서화(다른 개발자가 테스트 코드를 보며 기능에 대해 이해할 수 있도록 할 것)

#### 좋은 테스트 구조

- Structure of Test: 1) Before(beforeEach, beforeAll), 2) a test, 3) After(afterEach, afterAll)
- 2. a test : 1) arrange(given), 2) act(when), 3) assert(then)
- arrange : 준비 과정을 재사용 할 수 있도록 할 것.
- when: 의도적으로 실패하기
- then: 가장 마지막에 두는 것이 좋음, 하나의 테스트에서 너무 많은 것을 하고 있다면 분리하는 것을 고려

#### 좋은 테스트의 원칙(FIRST)

- fast : 느린 것에 대한 의존성 낮추기(파일, 데이터베이스, 네트워크 등 → mock, stub 이용)
- isolated : 최소한의 유닛으로 검증 , 독립적 집중적
- repeatable: 실행할 때마다 동일한 결과를 유지(환경에 영향을 받지 않도록)
- self-validating: 스스로 결과를 검증하기, 자동화를 통한 검증단계(CI/CD)
- timely: 시의적절하게 테스트 코드 작성(사용자에게 배포되기 이전에 테스트 코드 작성

#### 무엇을 테스트해야하나?

- Boundary conditions: 모든 코너 케이스에 대해 테스트하기(잘못된 포맷의 인풋, null, 특수문자, 잘못된 이메일, 작은 숫자, 큰숫자, 중복, 순서가 맞지 않을 때 등)
- inverse relationship: 역관계를 적용해서 결과값을 확인(일관성을 유지하는지 확인)
- cross-check: 다른 수단을 이용해서 결과값이 맞는지 확인
- error conditions: 불행한 경로에 대해 우아하게 처리하는지?(네트워크 에러, 메모리 부족, 데이터베이스 중지 등)
- performance characteristics: 성능 확인은 테스트를 통해 정확한 수치로 확인

#### 좋은 테스트의 커버리지(CORRECT)

- Conformance: 특정 포맷을 준수하는가(전화번호, 이메일, 아이디, 파일 확장자 등)
- Ordering: 순서 조건 확인하기(순서가 중요한 경우)
- Range: 숫자의 범위(제한된 범위보다 작거나 큰 경우)
- Referance: 외부 의존성 유무, 특정한 조건의 유무(~일때, ~가 되었을 때, 어떤 특정한 상황/환경일때 이런 동작을 한다 등)
- Existence: 값이 존재하지 않을때 어떻게 동작하는지(null, undefined, “”, 0)
- Cardinality: 0-1-N 법칙에 따라 검증, 하나도 없을 때 하나만 있을 때 여러개가 있을때
- Time: 상대, 절대, 동시의 일들(순서가 맞지 않은 경우, 소비한 시간, 지역 시간 등)
