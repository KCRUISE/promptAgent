import React, { useState } from 'react';
import { Share, CalendarDays, Filter, BarChart2, PieChart, ArrowRight, Clock, CheckCircle, Star } from 'lucide-react';

const AnalyticsPanel = () => {
  const [dateRange, setDateRange] = useState('month'); // week, month, quarter, custom
  const [dataType, setDataType] = useState('usage'); // usage, performance, cost, quality
  
  // 인기 프롬프트 샘플 데이터
  const popularPrompts = [
    { 
      name: '고급 콘텐츠 요약 템플릿', 
      usageCount: 243, 
      rating: 4.8, 
      category: '요약'
    },
    { 
      name: '프로덕트 마케팅 템플릿', 
      usageCount: 172, 
      rating: 4.5,
      category: '마케팅'
    },
    { 
      name: '코드 최적화 도우미', 
      usageCount: 128, 
      rating: 4.9,
      category: '개발'
    },
    { 
      name: '고객 문의 응답 생성기', 
      usageCount: 98, 
      rating: 4.6,
      category: '고객 지원'
    },
    { 
      name: 'SQL 쿼리 생성 도구', 
      usageCount: 76, 
      rating: 4.7,
      category: '개발'
    }
  ];
  
  // 카테고리별 분포 데이터
  const categoryData = [
    { name: '마케팅', percentage: 35, color: 'bg-blue-500' },
    { name: '고객 지원', percentage: 25, color: 'bg-green-500' },
    { name: '개발', percentage: 20, color: 'bg-purple-500' },
    { name: '콘텐츠 요약', percentage: 15, color: 'bg-amber-500' },
    { name: '기타', percentage: 5, color: 'bg-gray-500' }
  ];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">분석 대시보드</h2>
        <div className="flex items-center space-x-2">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button 
              onClick={() => setDateRange('week')}
              className={`px-3 py-1.5 text-sm ${dateRange === 'week' ? 'bg-gray-100 font-medium' : 'bg-white'}`}
            >
              주간
            </button>
            <button 
              onClick={() => setDateRange('month')}
              className={`px-3 py-1.5 text-sm ${dateRange === 'month' ? 'bg-gray-100 font-medium' : 'bg-white'}`}
            >
              월간
            </button>
            <button 
              onClick={() => setDateRange('quarter')}
              className={`px-3 py-1.5 text-sm ${dateRange === 'quarter' ? 'bg-gray-100 font-medium' : 'bg-white'}`}
            >
              분기
            </button>
            <button 
              onClick={() => setDateRange('custom')}
              className={`px-3 py-1.5 text-sm ${dateRange === 'custom' ? 'bg-gray-100 font-medium' : 'bg-white'}`}
            >
              사용자 지정
            </button>
          </div>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <CalendarDays size={16} className="text-gray-500" />
          </button>
          <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
            <Share size={16} className="inline-block mr-1" />
            내보내기
          </button>
        </div>
      </div>
      
      {/* 분석 지표 카드 */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div 
          className={`bg-white p-4 rounded-lg border ${dataType === 'usage' ? 'border-blue-300 ring-1 ring-blue-300' : 'border-gray-200'} shadow-sm cursor-pointer`}
          onClick={() => setDataType('usage')}
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${dataType === 'usage' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} mr-4`}>
              <BarChart2 size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">총 실행 횟수</p>
              <p className="text-xl font-bold">1,247</p>
              <p className="text-xs text-green-600">
                <ArrowRight size={12} className="inline-block -rotate-45 mr-1" />
                전월 대비 +12.3%
              </p>
            </div>
          </div>
        </div>
        
        <div 
          className={`bg-white p-4 rounded-lg border ${dataType === 'performance' ? 'border-blue-300 ring-1 ring-blue-300' : 'border-gray-200'} shadow-sm cursor-pointer`}
          onClick={() => setDataType('performance')}
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${dataType === 'performance' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} mr-4`}>
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">평균 성능 점수</p>
              <p className="text-xl font-bold">8.7/10</p>
              <p className="text-xs text-green-600">
                <ArrowRight size={12} className="inline-block -rotate-45 mr-1" />
                전월 대비 +0.5
              </p>
            </div>
          </div>
        </div>
        
        <div 
          className={`bg-white p-4 rounded-lg border ${dataType === 'cost' ? 'border-blue-300 ring-1 ring-blue-300' : 'border-gray-200'} shadow-sm cursor-pointer`}
          onClick={() => setDataType('cost')}
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${dataType === 'cost' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} mr-4`}>
              <DollarSign size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">총 API 비용</p>
              <p className="text-xl font-bold">$43.28</p>
              <p className="text-xs text-red-600">
                <ArrowRight size={12} className="inline-block rotate-45 mr-1" />
                전월 대비 +18.5%
              </p>
            </div>
          </div>
        </div>
        
        <div 
          className={`bg-white p-4 rounded-lg border ${dataType === 'quality' ? 'border-blue-300 ring-1 ring-blue-300' : 'border-gray-200'} shadow-sm cursor-pointer`}
          onClick={() => setDataType('quality')}
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${dataType === 'quality' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} mr-4`}>
              <Star size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">평균 평점</p>
              <p className="text-xl font-bold">4.8/5</p>
              <p className="text-xs text-green-600">
                <ArrowRight size={12} className="inline-block -rotate-45 mr-1" />
                전월 대비 +0.2
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 메인 차트 */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">
            {dataType === 'usage' && '프롬프트 사용량 추이'}
            {dataType === 'performance' && '프롬프트 성능 메트릭'}
            {dataType === 'cost' && 'API 비용 및 토큰 사용량'}
            {dataType === 'quality' && '프롬프트 품질 점수'}
          </h3>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-md p-1.5 text-sm">
              <option>모든 프롬프트</option>
              <option>요약 프롬프트</option>
              <option>마케팅 프롬프트</option>
              <option>개발 프롬프트</option>
            </select>
            <select className="border border-gray-300 rounded-md p-1.5 text-sm">
              <option>모든 모델</option>
              <option>GPT-4</option>
              <option>Claude 3</option>
              <option>Gemini</option>
            </select>
            <button className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {dataType === 'usage' && (
            <div className="h-80 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
              <BarChart2 size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-400 mb-2">프롬프트 일별/주별 사용량 차트가 표시됩니다</p>
              <p className="text-xs text-gray-400">구현 시 실제 데이터 기반의 차트가 이 곳에 표시됩니다</p>
            </div>
          )}
          
          {dataType === 'performance' && (
            <div className="h-80 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
              <CheckCircle size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-400 mb-2">프롬프트 성능 메트릭 차트가 표시됩니다</p>
              <p className="text-xs text-gray-400">구현 시 실제 데이터 기반의 차트가 이 곳에 표시됩니다</p>
            </div>
          )}
          
          {dataType === 'cost' && (
            <div className="h-80 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
              <DollarSign size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-400 mb-2">API 비용 및 토큰 사용량 차트가 표시됩니다</p>
              <p className="text-xs text-gray-400">구현 시 실제 데이터 기반의 차트가 이 곳에 표시됩니다</p>
            </div>
          )}
          
          {dataType === 'quality' && (
            <div className="h-80 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
              <Star size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-400 mb-2">프롬프트 품질 점수 차트가 표시됩니다</p>
              <p className="text-xs text-gray-400">구현 시 실제 데이터 기반의 차트가 이 곳에 표시됩니다</p>
            </div>
          )}
        </div>
      </div>
      
      {/* 하단 카드 */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">
              카테고리별 사용량
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              자세히 보기
            </button>
          </div>
          <div className="p-4">
            <div className="mb-6">
              {categoryData.map((category, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-700">{category.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${category.color}`} 
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-xs text-center text-gray-500">
              총 프롬프트 사용 횟수: 1,247건
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">
              인기 프롬프트 순위
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              모두 보기
            </button>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead className="text-xs font-medium text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="pb-2 text-left">프롬프트</th>
                  <th className="pb-2 text-center">사용 횟수</th>
                  <th className="pb-2 text-center">평균 평점</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200">
                {popularPrompts.map((prompt, index) => (
                  <tr key={index}>
                    <td className="py-3">
                      <div className="font-medium">{prompt.name}</div>
                      <div className="text-xs text-gray-500">{prompt.category}</div>
                    </td>
                    <td className="py-3 text-center">{prompt.usageCount}</td>
                    <td className="py-3 text-center flex justify-center">
                      <Star size={14} className="text-amber-400 fill-current mr-1" />
                      <span>{prompt.rating}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// DollarSign 아이콘 컴포넌트
const DollarSign = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default AnalyticsPanel;