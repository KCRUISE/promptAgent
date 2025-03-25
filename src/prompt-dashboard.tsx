import React from 'react';
import { FileText, Play, Users, Award, Star, Eye, CheckCircle, Copy } from 'lucide-react';

const Dashboard = () => {
  // 최근 실행 내역 샘플 데이터 
  const recentExecutions = [
    {
      id: 1,
      promptTitle: '고급 콘텐츠 요약 템플릿',
      aiModel: 'GPT-4',
      executedAt: '오늘 14:32',
      inputTokens: 312,
      outputTokens: 189,
      cost: 0.021,
      rating: 5
    },
    {
      id: 2,
      promptTitle: '제품 설명 생성기',
      aiModel: 'Claude 3',
      executedAt: '오늘 13:15',
      inputTokens: 256,
      outputTokens: 312,
      cost: 0.018,
      rating: 4
    },
    {
      id: 3,
      promptTitle: '코드 최적화 도우미',
      aiModel: 'GPT-4',
      executedAt: '어제 17:45',
      inputTokens: 520,
      outputTokens: 380,
      cost: 0.034,
      rating: 5
    }
  ];
  
  // 활성 A/B 테스트 샘플 데이터
  const activeTests = [
    {
      id: 1,
      name: '마케팅 카피 최적화',
      variants: 2,
      runningDays: 5,
      impressions: 324,
      leadingVariant: 'B',
      improvement: '+30.8%'
    },
    {
      id: 2,
      name: '고객 지원 응답 톤',
      variants: 3,
      runningDays: 3,
      impressions: 186,
      leadingVariant: 'C',
      improvement: '+12.4%'
    }
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">대시보드</h2>
        
        {/* 통계 카드 */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">총 프롬프트</p>
                <p className="text-xl font-bold">38</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-50 text-green-600 mr-4">
                <Play size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">실행 횟수 (이번 달)</p>
                <p className="text-xl font-bold">527</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-50 text-purple-600 mr-4">
                <Users size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">팀 구성원</p>
                <p className="text-xl font-bold">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-amber-50 text-amber-600 mr-4">
                <Award size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">평균 평점</p>
                <p className="text-xl font-bold">4.7/5</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 최근 실행 내역 */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">최근 실행 내역</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">모두 보기</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">프롬프트</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">AI 모델</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">실행 시간</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">토큰</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">비용</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">평가</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentExecutions.map(execution => (
                  <tr key={execution.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">{execution.promptTitle}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{execution.aiModel}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{execution.executedAt}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{execution.inputTokens} / {execution.outputTokens}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">${execution.cost.toFixed(3)}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center">
                        {[...Array(execution.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-amber-400 fill-current" />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 활성 A/B 테스트 */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">활성 A/B 테스트</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">새 테스트 생성</button>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            {activeTests.map(test => (
              <div key={test.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium text-gray-800">{test.name}</h4>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    진행 중
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">변형</p>
                    <p className="text-sm font-medium">{test.variants}개</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">실행 일수</p>
                    <p className="text-sm font-medium">{test.runningDays}일</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">노출 수</p>
                    <p className="text-sm font-medium">{test.impressions}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">현재 우수 변형</p>
                    <p className="text-sm font-medium">변형 {test.leadingVariant} ({test.improvement})</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <Eye size={14} className="mr-1" />
                    상세 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;