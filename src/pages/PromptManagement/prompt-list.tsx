import React, { useState } from 'react';
import { Search, Filter, Eye, Edit, Copy, Trash, Plus, Star, Tag, Clock, Calendar } from 'lucide-react';

const PromptList = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // 샘플 프롬프트 데이터
  const prompts = [
    {
      id: 1,
      title: '고급 콘텐츠 요약 템플릿',
      description: '긴 문서나 기사를 간결하고 명확하게 요약하기 위한 프롬프트 템플릿입니다.',
      category: '요약',
      tags: ['요약', '콘텐츠', '문서'],
      status: 'active',
      createdAt: '2025-03-15',
      lastModified: '2025-03-20',
      avgRating: 4.8,
      usageCount: 243
    },
    {
      id: 2,
      title: '프로덕트 마케팅 템플릿',
      description: '제품 정보를 기반으로 매력적인 마케팅 카피를 생성하는 프롬프트입니다.',
      category: '마케팅',
      tags: ['마케팅', '카피라이팅', '제품'],
      status: 'active',
      createdAt: '2025-03-10',
      lastModified: '2025-03-18',
      avgRating: 4.5,
      usageCount: 172
    },
    {
      id: 3,
      title: '코드 최적화 도우미',
      description: '기존 코드를 분석하고 성능과 가독성을 개선하는 최적화된 버전을 제안합니다.',
      category: '개발',
      tags: ['개발', '코드', '최적화', 'Python'],
      status: 'draft',
      createdAt: '2025-03-05',
      lastModified: '2025-03-15',
      avgRating: 4.9,
      usageCount: 128
    },
    {
      id: 4,
      title: '고객 문의 응답 생성기',
      description: '다양한 고객 문의에 대해 공손하고 도움이 되는 응답을 자동으로 생성합니다.',
      category: '고객 지원',
      tags: ['고객 지원', '응답', '서비스'],
      status: 'active',
      createdAt: '2025-03-08',
      lastModified: '2025-03-22',
      avgRating: 4.6,
      usageCount: 310
    },
    {
      id: 5,
      title: '블로그 포스트 아이디어 생성기',
      description: '특정 주제나 키워드에 대한 창의적인 블로그 포스트 아이디어와 개요를 제안합니다.',
      category: '콘텐츠',
      tags: ['블로그', '아이디어', '창작'],
      status: 'archived',
      createdAt: '2025-02-20',
      lastModified: '2025-03-05',
      avgRating: 4.2,
      usageCount: 87
    },
    {
      id: 6,
      title: 'SQL 쿼리 최적화 도우미',
      description: '복잡한 SQL 쿼리를 분석하고 더 효율적인 버전으로 최적화합니다.',
      category: '개발',
      tags: ['SQL', '데이터베이스', '최적화'],
      status: 'active',
      createdAt: '2025-03-01',
      lastModified: '2025-03-10',
      avgRating: 4.7,
      usageCount: 156
    }
  ];
  
  // 카테고리 옵션 추출
  const categories = ['all', ...new Set(prompts.map(p => p.category))];
  
  // 상태에 따른 배지 색상 결정
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };
  
  // 상태 텍스트 변환
  const getStatusText = (status) => {
    switch(status) {
      case 'active':
        return '활성';
      case 'draft':
        return '초안';
      case 'archived':
        return '보관됨';
      default:
        return status;
    }
  };
  
  // 필터링 및 검색 로직
  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = searchTerm === '' || 
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || prompt.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || prompt.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">프롬프트 목록</h2>
        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 flex items-center">
          <Plus size={16} className="mr-1" />
          새 프롬프트 생성
        </button>
      </div>
      
      {/* 필터 및 검색 도구 */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-grow max-w-md">
            <input 
              type="text" 
              placeholder="프롬프트 검색..." 
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <select 
            className="px-3 py-2 border border-gray-300 rounded-md"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((category, idx) => (
              <option key={idx} value={category}>
                {category === 'all' ? '모든 카테고리' : category}
              </option>
            ))}
          </select>
          
          <select 
            className="px-3 py-2 border border-gray-300 rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">모든 상태</option>
            <option value="active">활성</option>
            <option value="draft">초안</option>
            <option value="archived">보관됨</option>
          </select>
          
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <button 
              className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => setViewMode('grid')}
            >
              <GridIcon size={18} className="text-gray-500" />
            </button>
            <button 
              className={`px-3 py-2 ${viewMode === 'list' ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => setViewMode('list')}
            >
              <ListIcon size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* 프롬프트 목록 - 그리드 뷰 */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrompts.map(prompt => (
            <div key={prompt.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-800 truncate">{prompt.title}</h3>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusBadgeClass(prompt.status)}`}>
                    {getStatusText(prompt.status)}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{prompt.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {prompt.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-xs text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Tag size={12} className="mr-1" />
                    {prompt.category}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    수정: {prompt.lastModified}
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center">
                    <Star size={12} className="text-amber-400 fill-current mr-1" />
                    {prompt.avgRating.toFixed(1)}
                  </div>
                  <div className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {prompt.usageCount}회 사용
                  </div>
                </div>
              </div>
              
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
                <button className="text-gray-500 p-1 hover:text-gray-700">
                  <Eye size={16} />
                </button>
                <button className="text-gray-500 p-1 hover:text-gray-700">
                  <Edit size={16} />
                </button>
                <button className="text-gray-500 p-1 hover:text-gray-700">
                  <Copy size={16} />
                </button>
                <button className="text-red-500 p-1 hover:text-red-700">
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* 프롬프트 목록 - 리스트 뷰 */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">프롬프트</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카테고리</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">평점</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">사용량</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">수정일</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">액션</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPrompts.map(prompt => (
                <tr key={prompt.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{prompt.title}</div>
                    <div className="text-xs text-gray-500">{prompt.description.substring(0, 60)}...</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                      {prompt.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(prompt.status)}`}>
                      {getStatusText(prompt.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star size={14} className="text-amber-400 fill-current mr-1" />
                      <span>{prompt.avgRating.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {prompt.usageCount}회
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {prompt.lastModified}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-gray-500 p-1 hover:text-gray-700">
                        <Eye size={16} />
                      </button>
                      <button className="text-gray-500 p-1 hover:text-gray-700">
                        <Edit size={16} />
                      </button>
                      <button className="text-gray-500 p-1 hover:text-gray-700">
                        <Copy size={16} />
                      </button>
                      <button className="text-red-500 p-1 hover:text-red-700">
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* 페이지네이션 */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          총 <span className="font-medium">{filteredPrompts.length}</span>개의 프롬프트
        </div>
        <div className="flex space-x-1">
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>
            이전
          </button>
          <button className="px-3 py-1 border border-blue-600 bg-blue-600 rounded text-sm text-white">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

// 그리드 아이콘 컴포넌트
const GridIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

// 리스트 아이콘 컴포넌트
const ListIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);

export default PromptList;