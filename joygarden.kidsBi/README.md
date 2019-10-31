# joygarden.kidsBi

### How to training
1. Get videos
```
1-1. Root
[g:GetVideo] 동화 보여줘  // => Category selection으로 이동
[g:GetVideo] (인기 있는)[v:VideoCategory:Popular] 동화 보고 싶어  // variation은 [region]/vocab/VideoCategory.vocab.bxb에 추가
[g:GetVideo] (신데렐라)[v:SearchTerm] 동화 보여줘

[g:GetRandomVideo] 키즈비가 추천해줘  // 무작위 동화 5편 추천

1-2. Follow-up
[g:OpenVideoInYoutube:continue:VideoInfo] 이거 유튜브에서 보고 싶어
[g:OpenVideoInYoutube:continue:VideoInfo] 동영상 재생이 안되요  // Video detail view의 Conversation driver

1-3. Prompt (selection)
// Ordinal select는 빅스비 기본 제공 (ex. 첫번째, 두번째)
// Variation 추가는 링크 참고 https://bixbydevelopers.com/dev/docs/reference/type/navigation-support.ordinal-selection-patterns

// Video category selection
[g:CategoryInfo:prompt] (자기 전)[v:FilterTerm]에 보기 좋은 동화로 골라줘 // variation은 'code/datas/category.js'에 추가

// Video selection
[g:SelectVideoInfo:continue:VideoInfo] (라푼젤)[v:FilterTerm]을 골라줘  // video의 title만 partial matching (exact matching 및 출처 필터 X)
```

2. Start quiz game
```
2-1. Root
[g:StartQuiz] 퀴즈 풀고 싶어
[g:StartQuiz] (동물)[v:QuizCategory:Animal] 맞추기 할래 // variation은 [region]/vocab/QuizCategory.vocab.bxb에 추가
[g:StartQuiz] 다시 풀래 / 다른 퀴즈 풀고 싶어 // 퀴즈 그만하기(QuizResult view)의 Conversation driver

2-2. Follow-up
// Quiz category select
[g:QuizCategory:prompt] (수학)[v:QuizCategoey:Math] 퀴즈 선택해  // variation은 [region]/vocab/QuizCategory.vocab.bxb에 추가

// Answer select
// 빅스비 기본 Ordinal selection이 적용 안됨
[g:StartQuiz:continue:QuizProgress,r:UpdateProgress] (첫번째)[v:Ordinal]  // variation은 [region]/vocab/Ordinal.vocab.bxb에 추가
[g:StartQuiz:continue:QuizProgress,r:UpdateProgress] 답은 (호랑이)[v:UserAnswer]

[g:SolveQuizAnswer:prompt] 퀴즈 (그만)[v:SolveQuizAnswer:true] 풀고 싶어  // vocab은 아니지만 가능한 '그만', '취소' tagging
[g:SolveQuizAnswer:prompt] 이 문제 (정답 알려줘)[v:SolveQuizAnswer:false] // '정답', '알려줘' tagging, 진행 중인 퀴즈의 summary view로 이동

[g:StartQuiz:continue:QuizProgress,r:ReTryQuiz] 틀린 문제 다시 풀래 // 마지막 view에서 진행
```

3. Start learning
```
3-1. Root
[g:GetQuiz] 키즈비에는 어떤 퀴즈가 있어 / 문제 카드들 보여줘 / 학습 모드 시작
[g:GetQuiz] (과일)[v:QuizCategory:Animal] 공부하고 싶어 / (수학)[v:QuizCategory:Math] 문제는 뭐가 있어

3-2. Follow-up
[g:QuizCategory:prompt] (인물)[v:QuizCategory:Person] 선택해 / (나라)[v:QuizCategory:Country] 문제 보여줘
```

### Video Category
사용가능한 Video Category 목록입니다.
> Video 카테고리 수정 시,
> `models/concepts/VideoCategory.model.bxb`, `code/datas/category.js`, `dialog/QuizCategoryValue.dialog.bxb`, `[region]/vocab/VideoCategory.vocab.bxb`
> 와 동일하게 업데이트 되어야 합니다.

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
> Quiz 카테고리 수정 시,
> `models/QuizCategory.model.bxb`, `code/GetQuizCategory.js`, `[region]/dialog/QuizCategoryValue.dialog.bxb`, `[region]/vocab/QuizCategory.vocab.bxb`
> 에 동일하게 업데이트 되어야 합니다.

| ko-KR | en-US |
| ----- | ----- |
업데이트 바람

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
- 0.1.26: OpenVideoInYoutube action 추가
- 0.1.27: GetVideoUrl 추가
- 0.1.28: Add Quiz Category Image
- 0.1.29: Add QuizCategory,VideoCategory Vocab
- 0.1.30: GetRandomVideo 수정
- 0.1.31: QuizInfo layout 수정
- 0.1.32: ReTryQuiz 수정 및 Value dialog 추가
- 0.1.33: GetVideo url 수정
- 0.1.34: Quiz category 추가
