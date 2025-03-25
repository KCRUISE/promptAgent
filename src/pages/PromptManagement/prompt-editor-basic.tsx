import React from 'react';

// 간소화된 프롬프트 에디터 컴포넌트
const PromptEditorBasic = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">새 프롬프트 생성</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            프롬프트 제목
          </label>
          <input 
            type="text" 
            placeholder="프롬프트 제목을 입력하세요"
            className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            프롬프트 설명
          </label>
          <textarea 
            placeholder="프롬프트의 목적과 사용 방법을 설명하세요"
            className="w-full border border-gray-300 rounded-md p-2.5 text-sm h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            카테고리
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="marketing">마케팅</option>
            <option value="development">개발</option>
            <option value="customer-support">고객 지원</option>
            <option value="content">콘텐츠</option>
            <option value="summary">요약</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            프롬프트 템플릿
          </label>
          <textarea 
            placeholder="프롬프트 템플릿을 작성하세요... 변수는 {변수명} 형식으로 입력하세요."
            className="w-full border border-gray-300 rounded-md p-3 text-sm h-64 font-mono focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            태그
          </label>
          <input 
            type="text" 
            placeholder="태그를 콤마로 구분하여 입력하세요 (예: 마케팅, 카피라이팅)"
            className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            호환 모델
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked />
              <span className="text-sm text-gray-700">GPT-4</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked />
              <span className="text-sm text-gray-700">Claude 3</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" />
              <span className="text-sm text-gray-700">GPT-3.5 Turbo</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" />
              <span className="text-sm text-gray-700">Gemini Pro</span>
            </label>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-3">변수 관리</h3>
        
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                변수명
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-1" checked />
                필수
              </label>
            </div>
            <input 
              type="text" 
              value="product_name"
              className="w-full border border-gray-300 rounded-md p-2 text-sm mb-2"
            />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">
              설명
            </label>
            <input 
              type="text" 
              value="제품명을 입력하세요"
              className="w-full border border-gray-300 rounded-md p-2 text-sm mb-2"
            />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">
              변수 유형
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
              <option value="text">텍스트</option>
              <option value="textarea">텍스트 영역</option>
              <option value="select">선택 목록</option>
              <option value="number">숫자</option>
            </select>
          </div>
          
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                변수명
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-1" checked />
                필수
              </label>
            </div>
            <input 
              type="text" 
              value="features"
              className="w-full border border-gray-300 rounded-md p-2 text-sm mb-2"
            />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">
              설명
            </label>
            <input 
              type="text" 
              value="주요 기능을 입력하세요"
              className="w-full border border-gray-300 rounded-md p-2 text-sm mb-2"
            />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">
              변수 유형
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
              <option value="text">텍스트</option>
              <option value="textarea" selected>텍스트 영역</option>
              <option value="select">선택 목록</option>
              <option value="number">숫자</option>
            </select>
          </div>
          
          <button className="w-full py-2 border border-dashed border-gray-300 text-sm text-gray-500 rounded-md hover:bg-gray-50">
            + 새 변수 추가
          </button>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            취소
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            초기화
          </button>
          <button className="px-4 py-2 bg-green-600 rounded-md text-sm text-white hover:bg-green-700">
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptEditorBasic;