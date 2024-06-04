# ✅ NextJS

NextJS는 React프레임워크

NextJs는 서버사이드에서 렌더링 SSR 됩니다.

클라이어트가 웹에 접속한다면 서버에서 렌더링되서 보여줍니다.

## 🧑‍💻 CSR vs SSR

<aside>
✍🏻 **CSR vs SSR 차이**

</aside>

1. 웹페이지 로딩 시간
    1. CSR은 html, css, javascript를 한번에 불러온다.
        1. javascript를 비활성해서 보면 화면에 보여줄 수 없다는 걸 알 수 있습니다. 활성화 시켜서 다시 실행하면 깜빡임을 볼 수 있는데 이건 파일을 한번에 불러와서 렌더링하는 react CSR에 특징입니다.
    2. SSR은  필요한 부분 Html, script만 불러온다.

→  속도면에서 SSR이 더 빠르게 불러온다.

 **2. SEO 대응**

- CSR은 자바스크립트를 실행시켜 동적으로 컨텐츠 생성되기 때문에 metadata가 바뀜
    - 파일을 불러오기 전까지는 html을 보여줌. 그래서 SEO면에서 좋지 않음
- SSR은 애초에 서버 사이드에서 컴파일되서 클라이언트로 넘어오기 때문에 크롤러 대응하기 용이
    - html을  보여주는데 자바스크립트가 전혀 필요 없기 때문에 새로고침 하더라도 깜빡임이 없음(자바스크립트를 비활성화 하더라도 만찬가지)

<aside>
✍🏻 Hydration

</aside>

서버사이드 렌더링(SSR)을 통해 만들어 진 인터랙티브 하지 않는 HTML을 클라이언트 측 자바스크립트를 사용하여 인터랙티브한 리액트 컴포넌트로 변환하는 과정을 말한다.

Client ⇒ Html ⇒ react 

<aside>
✍🏻 use client

</aside>

클라이언트 컴포넌트를 사용하려면 파일 상단, import 위에 React "use client" 지시어를 추가하면 됩니다.

"use client"은 서버와 클라이언트 컴포넌트 모듈 간의 경계를 선언하는 데 사용됩니다.

즉, 파일에 "use client"을 정의하면 하위 컴포넌트를 포함하여 해당 파일로 가져온 다른 모든 모듈이 클라이언트 번들의 일부로 간주됩니다.

# 🧑‍💻 Defining Routes

<aside>
✍🏻 Next.js는 폴더를 사용하여 경로를 정의하는 파일 시스템 기반 라우터를 사용합니다. 각 폴더는 URL 세그먼트에 매핑되는 경로 세그먼트를 나타냅니다. 중첩된 경로를 만들려면 폴더를 서로 중첩하면 됩니다.

</aside>

1. app 폴더 생성
    1. app폴더 라우팅 역활을 함
    2. 렌더링할 페이지는 page.tsx로만든다.(무조건)
    
    ![img](https://prod-files-secure.s3.us-west-2.amazonaws.com/5f2b6cb6-f34c-4d7c-b52e-e7f618ff36b8/e3362154-7309-4dd0-a3c7-c53006408f9b/Untitled.png)
    

특별한 [`page.js` 파일](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)이 루트 세그먼트를 공개적으로 접근 가능하게 만드는데 사용됩니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/5f2b6cb6-f34c-4d7c-b52e-e7f618ff36b8/c77f5957-6ac4-40a8-a0d6-abf57f079408/Untitled.png)

이 예에서, `/dashboard/analytics` URL 경로는 공개적으로 접근할 수 없습니다. 왜냐하면 해당하는 `page.js` 파일이 없기 때문입니다. 이 폴더는 컴포넌트, 스타일시트, 이미지 또는 다른 공동 위치 파일을 저장하는 데 사용될 수 있습니다.

1. 중첩 폴더로 url를 생성할 수 있음
    1. 대신 중첩폴더를 만들고 반드시 page.js(or page.tsx)를 생성해야됨
    

## ✍️ creating UI

[특별한 파일 규칙](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)은 각 루트 세그먼트에 대한 UI를 생성하는 데 사용됩니다. 가장 일반적인 것은 루트별로 고유한 UI를 보여주는 [페이지](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)와 여러 루트에 걸쳐 공유되는 UI를 보여주는 [레이아웃](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)입니다.

예를 들어, 첫 페이지를 만들려면 `app` 디렉토리 내에 `page.js` 파일을 추가하고 React 컴포넌트를 내보냅니다:

```jsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

## 🧑‍💻 not-found.js

**찾을 수 없는** 파일 은 [`notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)함수가 경로 세그먼트 내에서 실행될 때 UI를 렌더링하는 데 사용됩니다.

사용자 정의 UI 제공과 함께 Next.js는 `200`스트리밍된 응답과 `404`스트리밍되지 않은 응답에 대해 HTTP 상태 코드를 반환합니다.

```jsx
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
```

1. 전역으로 not-found 컴포넌트를 사용할 수 있음
2. http 응답과 함께 보여줌

## 🧑‍💻 usePathname

`usePathname`현재 URL의 **경로 이름을 읽을 수 있는 클라이언트 구성 요소** 후크

주의

그냥 사용하면 에러가 발생하기에 상대에 “use Client”를 사용함

```jsx
'use client'
 
import { usePathname } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const pathname = usePathname()
  return <p>Current pathname: {pathname}</p>
}
```

<aside>
✍🏻 React client hook in Server Component 오류

</aside>

서버 컴포넌트에서 React 클라이언트 훅을 사용하고 있을 때 발생하는 오류로 'use client' 를 추가해 클라이언트 컴포넌트로 바꿔줘야 함
