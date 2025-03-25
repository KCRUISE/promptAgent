#!/bin/bash

# GitHub 저장소 주소: https://github.com/KCRUISE/promptAgent
# 스크립트 사용 전 확인사항:
# 1. 현재 스크립트를 Git 저장소의 루트 디렉토리에서 실행해야 합니다.
# 2. 로컬 저장소가 GitHub 저장소와 연결되어 있어야 합니다 (일반적으로 git clone 후에는 연결되어 있음).
# 3. 푸시하려는 브랜치 이름을 확인하세요 (기본적으로 'main' 브랜치를 사용).

set -e # 스크립트가 에러 발생 시 즉시 종료

echo "🚀 GitHub 저장소에 코드 반영 스크립트를 시작합니다..."

# 1. 변경사항 스테이징 (git add)
echo "- 모든 변경사항을 스테이징합니다."
git add .

# 2. 커밋 메시지 입력 요청 (git commit)
read -p "📝 커밋 메시지를 입력하세요: " commit_message
if [ -z "$commit_message" ]; then
    echo "⚠️ 커밋 메시지가 입력되지 않았습니다. 기본 메시지를 사용합니다."
    commit_message="feat: 로컬 변경사항 반영" # 기본 메시지
fi
echo "- 커밋 메시지: '$commit_message'"
git commit -m "$commit_message"

# 3. GitHub 원격 저장소에 푸시 (git push)
remote_name="origin" # 원격 저장소 이름 (일반적으로 'origin')
branch_name="main"   # 푸시할 브랜치 이름 (기본적으로 'main')
echo "- '$remote_name' 원격 저장소의 '$branch_name' 브랜치에 푸시합니다."
git push $remote_name $branch_name

echo "✅ GitHub 저장소에 코드 반영이 완료되었습니다!"
echo "🎉 수고하셨습니다!"