import React from 'react';
import { Search, Filter, Eye, Copy, CheckCircle, GitBranch, Plus, ArrowRight } from 'lucide-react';

const ABTesting = () => {
  // A/B 테스트 데이터
  const abTests = [
    {
      id: 1,
      name: '마케팅 카피 최적화',
      status: 'active',
      created: '2025-03-15',
      promptCategory: '마케팅',
      createdBy: '김민수',
      daysRemaining: 3,
      variants: [
        { id: 'A', conversionRate: 14.65 },
        { id: 'B', conversionRate: 19.16 }
      ]
    },
    {
      id: 2,
      name: '고객 지원 응답 톤',
      status: 'active',
      created: '2025-03-17',
      promptCategory: '고객 지원',
      createdBy: '이지연',
      daysRemaining: 5,
      variants: [
        { id: 'A', conversionRate: 45.2 },
        { id: 'B', conversionRate: 42.8 },
        { id: 'C', conversionRate: 52.3 }
      ]
    },
    {
      id: 3,
      name: '코드 설명 최적화',
      status: 'completed',
      created: '2025-03-10',
      promptCategory: '개발',
      createdBy: '박지민',
      daysRemaining: 0,
      variants: [
        { id: 'A', conversionRate: 67.4 },
        { id: 'B', conversionRate: 89.2 }
      ]
    }
  ];
  
  // 현재 선택된 테스트 (상세 보기용)
  const selectedTest = abTests[0];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">A/B 테스트</h2>
        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 flex items-center">
          <Plus size={16} className="mr-1" />
          새 테스트 생성
        </button>
      </div>
      
      {/* 필터 및 검색 */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="테스트 검색..."
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
          <select className="border border-gray-300 rounded-md p-2 text-sm">
            <option>모든 상태</option>
            <option>활성</option>
            <option>완료</option>
            <option>중단됨</option>
          </select>
          <select className="border border-gray-300 rounded-md p-2 text-sm">
            <option>모든 카테고리</option>
            <option>마케팅</option>
            <option>고객 지원</option>
            <option>개발</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter size={16} className="text-gray-500" />
          </button>
          <select className="border border-gray-300 rounded-md p-2 text-sm">
            <option>최신순</option>
            <option>오래된순</option>
            <option>이름순</option>
          </select>
        </div>
      </div>
      
      {/* A/B 테스트 목록 */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">테스트 이름</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">변형 수</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">상태</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">생성일</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">남은 기간</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">우수 변형</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {abTests.map(test => (
                <tr key={test.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-800">{test.name}</div>
                    <div className="text-xs text-gray-500">{test.promptCategory} · {test.createdBy}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">{test.variants.length}개 변형</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      test.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {test.status === 'active' ? '활성' : '완료'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">{test.created}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {test.daysRemaining > 0 ? `${test.daysRemaining}일 남음` : '완료됨'}
                  </td>
                  <td className="px-4 py-3">
                    {(() => {
                      const bestVariant = [...test.variants].sort((a, b) => b.conversionRate - a.conversionRate)[0];
                      const worstVariant = [...test.variants].sort((a, b) => a.conversionRate - b.conversionRate)[0];
                      const improvement = ((bestVariant.conversionRate - worstVariant.conversionRate) / worstVariant.conversionRate * 100).toFixed(1);
                      
                      return (
                        <div className="text-sm">
                          <span className="font-medium text-blue-600">변형 {bestVariant.id}</span>
                          <span className="ml-1 text-green-600">+{improvement}%</span>
                        </div>
                      );
                    })()}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center space-x-1">
                      <button className="p-1 text-gray-500 hover:text-gray-700" title="상세 보기">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700" title="복제">
                        <Copy size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700" title="종료">
                        <CheckCircle size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* 선택된 테스트 상세 */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-800">마케팅 카피 최적화 - 상세 결과</h3>
            <p className="text-sm text-gray-500 mt-1">두 가지 마케팅 카피 템플릿의 효과성 비교</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
              <CheckCircle size={16} className="inline-block mr-1" />
              승자 선택
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-800">변형 A (기본 버전)</h4>
                  <p className="text-sm text-gray-500 mt-1">기존 마케팅 카피 템플릿</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                  기준
                </span>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm mb-4 max-h-32 overflow-y-auto">
                <code className="text-xs whitespace-pre-line">
                  다음 제품에 대한 매력적인 마케팅 카피를 작성해주세요:
                  
                  제품: {"{product_name}"}
                  주요 기능: {"{features}"}
                  타겟 고객: {"{target_audience}"}
                  
                  톤앤보이스: {"{tone}"}
                </code>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">노출 수</p>
                  <p className="text-lg font-bold text-gray-800">157</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">전환 수</p>
                  <p className="text-lg font-bold text-gray-800">23</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">전환율</p>
                  <p className="text-lg font-bold text-gray-800">14.65%</p>
                </div>
              </div>
            </div>
            
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-800">변형 B (수정 버전)</h4>
                  <p className="text-sm text-gray-500 mt-1">고객 중심 마케팅 카피 템플릿</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  우수 변형 (+30.8%)
                </span>
              </div>
              
              <div className="bg-white border border-gray-200 rounded p-3 text-sm mb-4 max-h-32 overflow-y-auto">
                <code className="text-xs whitespace-pre-line">
                  다음 제품에 대해 고객의 문제점과 해결책을 중심으로 마케팅 카피를 작성해주세요:
                  
                  제품: {"{product_name}"}
                  주요 기능: {"{features}"}
                  타겟 고객: {"{target_audience}"}
                  고객 문제점: {"{pain_points}"}
                  
                  톤앤보이스: {"{tone}"}
                </code>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center mb-4">
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">노출 수</p>
                  <p className="text-lg font-bold text-gray-800">167</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">전환 수</p>
                  <p className="text-lg font-bold text-gray-800">32</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">전환율</p>
                  <p className="text-lg font-bold text-blue-700">19.16%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-3">성능 차이 분석</h4>
            <div className="mb-4">
              <h5 className="text-sm font-medium text-gray-700 mb-2">전환율 비교</h5>
              <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div className="h-full bg-blue-300 text-xs flex items-center justify-center text-blue-800 px-2" style={{ width: "43.3%" }}>
                    변형 A: 14.65%
                  </div>
                  <div className="h-full bg-blue-600 text-xs flex items-center justify-center text-white px-2" style={{ width: "56.7%" }}>
                    변형 B: 19.16%
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 flex items-center">
                <ArrowRight size={14} className="text-green-500 rotate-45 mr-1" />
                변형 B가 변형 A보다 전환율이 <span className="font-semibold text-green-600 mx-1">30.8%</span> 높습니다.
              </p>
            </div>
            
            <div className="mb-4">
              <h5 className="text-sm font-medium text-gray-700 mb-2">주요 차이점</h5>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
                <li>변형 B는 고객 문제점을 포함하여 공감 요소 추가</li>
                <li>변형 B는 해결책 중심의 카피를 작성하도록 안내함</li>
                <li>변형 B의 구조가 더 자세하고 체계적임</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
              <p>
                <span className="font-semibold">추천 결정:</span> 변형 B를 표준 마케팅 카피 템플릿으로 채택하는 것을 권장합니다. 고객 문제점을 명시적으로 포함시키면 더 공감되는 카피가 작성됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABTesting;