# joygarden.kidsBi

### How to training
1. GetVideo
```
[g:GetVideo] 동화 보여줘
[g:GetVideo] (인기 있는)[v:VideoCategory:Popular] 동화 보고 싶어
[g:GetVideo] (신데렐라)[v:SearchTerm] 동화 보여줘
```

2. GetCategory
```
[g:GetCategory] 동화 카테고리가 뭐가 있어
```

3. StartQuiz
```
```

### Category
사용가능한 Category 목록입니다.
> `models/concepts/VideoCategory.model.bxb`, `code/lib/category.js`와 동일하게 업데이트 되어야 합니다.

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
| 그림자 | 그림자 동화 |
| 전래 | Traditional |
| 인기있는 | Popular |


### history
- 0.1.0: 키즈비 시작
- 0.1.2: GetVideo action 추가
- 0.1.3: GetCategory action 추가 및 view 업데이트
- 0.1.4: QuizInfo structure 추가
- 0.1.5: StartQuiz, GetQuiz action (temporary) / QuizResult structure 추가
- 0.1.6: model folder 분리
- 0.1.7: SolveQuiz action 추가 (temporary)