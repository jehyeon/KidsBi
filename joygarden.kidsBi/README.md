# joygarden.kidsBi

### How to training
1. GetVideo
```
[g:GetVideo] 동화 보여줘
[g:GetVideo] (인기 있는)[v:VideoCategory:Popular] 동화 보고 싶어
[g:GetVideo] (신데렐라)[v:SearchTerm] 동화 보여줘

[g:GetRandomVideo] 아무거나 보여줘

select prompt
[g:SelectVideoInfo:continue:VideoInfo] (라푼젤)[v:FilterTerm]을 골라줘
```

2. GetCategory
```
[g:GetCategory] 동화 카테고리가 뭐가 있어

select prompt
[g:CategoryInfo:prompt] (침대)[v:FilterTerm]    // variation은 `code/datas/category.js`에 정의
```

3. StartQuiz
```
:: temporary
[g:StartQuiz] (한글)[v:QuizCategory:Korean]
[g:StartQuiz:continue:QuizProgress,r:UpdateProgress] (D)[v:UserAnswer]
[g:StartQuiz:continue:QuizProgress,r:ReTryQuiz] 이 문제 다시 풀래


[g:GetQuiz] 키즈비에는 어떤 퀴즈가 있어
```

### Video Category
사용가능한 Video Category 목록입니다.
> `models/concepts/VideoCategory.model.bxb`, `code/datas/category.js`, `dialog/QuizCategoryValue.dialog.bxb`와 동일하게 업데이트 되어야 합니다.

```
ex.
[g:CategoryInfo:prompt] (자기 전)[v:FilterTerm]에 보기 좋은 동화 선택해

in code/datas/category.js
exports.list = {
  Aesop: {
    'ko-KR': [
      '이솝',
      '우화',
      '이솝우화'
    ],
  },
  Bed: {
    'ko-KR': [
      '침대',
      '잠자리',
      '자기전'    // <- 이렇게 추가 (공백 무관)
    ],
  },
```

| ko-KR | en-US |
|-------|-------|
| 이솝 | Aesop |
| 잠자리 | Bed |
| 자동차 | Car |
| 크리스마스 | Christmas |
| 모음집 | Collection |
| 별자리 | Constellation |
| 공룡 | Dinosaur |
| 영어 | English |
| 한국 전래 | Korean tradition |
| 뮤지컬 | Musical |
| 공주 | Princess |
| 과학 | Science |
| 그림자 | Shadow |
| 전래 | Traditional |
| 인기있는 | Popular |


### QuizCategory
사용가능한 Quiz Category 목록입니다.
> `dialog/QuizCategoryValue.dialog.bxb`, `code/GetQuizCategory.js`, `models/QuizCategory.model.bxb`에 동일하게 업데이트 되어야 합니다.

| ko-KR | en-US |
| ----- | ----- |

### history
- 0.1.0: 키즈비 시작
- 0.1.2: GetVideo action 추가
- 0.1.3: GetCategory action 추가 및 view 업데이트
- 0.1.4: QuizInfo structure 추가
- 0.1.5: StartQuiz, GetQuiz action (temporary) / QuizResult structure 추가
- 0.1.6: model folder 분리
- 0.1.7: SolveQuiz action 추가 (temporary)
- 0.1.8: GetQuiz input-mapper 수정
- 0.1.9: GetQuiz 추가
- 0.1.10: StartQuiz 추가
- 0.1.11: ReTryQuiz 수정 완료
- 0.1.12: GetRandomVideo 추가
- 0.1.13: SelectVideoCategory 수정 및 SelectCategoryInfo 추가
- 0.1.14: SelectCategoryInfo 추가
- 0.1.15: SelectVideoInfo 추가
- 0.1.16: api 호출 수정 (to config.get())
- 0.1.17: VideoInfo summary layout 수정
- 0.1.18: QuizCategory 업데이트
- 0.1.19: VideoSummary view 수정 및 VideoSource value dialog 추가
- 0.1.20: VideoDetail view (source) 수정
- 0.1.21: VodeoCategory.ImageUrl 교체
- 0.1.22: UpdateProgress Logic 및 intent 활성화
- 0.1.23: StartQuiz Stop the Quiz CD 추가 
- 0.1.23: StartQuiz Stop the Quiz CD 추가
- 0.1.24: UpdatedProgress Ordinal 추가 
- 0.1.25: Category summary view 수정 (title 삭제)
