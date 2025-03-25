import React, { useState } from 'react';
import { Search, Filter, Users, Shield, Edit, Copy, Trash, CheckCircle, X, Plus, ChevronDown } from 'lucide-react';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('members'); // members, roles
  
  // 샘플 데이터
  const users = [
    {
      id: 1,
      name: '김민수',
      email: 'minsu.kim@example.com',
      role: '관리자',
      department: '개발',
      activePrompts: 15,
      lastActive: '오늘 12:30',
      avatarUrl: '/api/placeholder/32/32'
    },
    {
      id: 2,
      name: '이지연',
      email: 'jiyeon.lee@example.com',
      role: '프롬프트 엔지니어',
      department: '마케팅',
      activePrompts: 23,
      lastActive: '오늘 11:45',
      avatarUrl: '/api/placeholder/32/32'
    },
    {
      id: 3,
      name: '박지민',
      email: 'jimin.park@example.com',
      role: '편집자',
      department: '콘텐츠',
      activePrompts: 8,
      lastActive: '어제 15:20',
      avatarUrl: '/api/placeholder/32/32'
    },
    {
      id: 4,
      name: '최하늘',
      email: 'haneul.choi@example.com',
      role: '프롬프트 엔지니어',
      department: '개발',
      activePrompts: 12,
      lastActive: '오늘 09:15',
      avatarUrl: '/api/placeholder/32/32'
    },
    {
      id: 5,
      name: '정다운',
      email: 'dawoon.jung@example.com',
      role: '조회자',
      department: '고객 지원',
      activePrompts: 5,
      lastActive: '3일 전',
      avatarUrl: '/api/placeholder/32/32'
    }
  ];
  
  // 역할 정의
  const roles = [
    {
      id: 1,
      name: '관리자',
      description: '모든 권한 보유. 프롬프트 생성, 편집, 삭제 및 사용자 관리 가능',
      userCount: 2,
      permissions: ['create', 'edit', 'delete', 'invite', 'assign_roles', 'view_analytics', 'test']
    },
    {
      id: 2,
      name: '프롬프트 관리자',
      description: '관리자와 동일한 권한을 보유하지만 시스템 설정 변경 불가',
      userCount: 1,
      permissions: ['create', 'edit', 'delete', 'invite', 'assign_roles', 'view_analytics', 'test']
    },
    {
      id: 3,
      name: '프롬프트 엔지니어',
      description: '프롬프트 생성, 편집 및 테스트 가능. 분석 정보 접근 가능',
      userCount: 5,
      permissions: ['create', 'edit', 'test', 'view_analytics']
    },
    {
      id: 4,
      name: '편집자',
      description: '프롬프트 생성 및 편집 가능. 사용자 관리 권한 없음',
      userCount: 3,
      permissions: ['create', 'edit']
    },
    {
      id: 5,
      name: '조회자',
      description: '프롬프트 조회 및 실행만 가능. 편집 권한 없음',
      userCount: 2,
      permissions: ['view', 'execute']
    }
  ];
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">사용자 관리</h2>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            <Plus size={16} className="inline-block mr-1" />
            사용자 추가
          </button>
        </div>
      </div>
      
      {/* 사용자 관리 탭 */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-6">
          <button
            onClick={() => setActiveTab('members')}
            className={`pb-3 px-1 ${activeTab === 'members' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Users size={16} className="inline-block mr-1" />
            사용자
          </button>
          <button
            onClick={() => setActiveTab('roles')}
            className={`pb-3 px-1 ${activeTab === 'roles' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Shield size={16} className="inline-block mr-1" />
            역할 및 권한
          </button>
        </nav>
      </div>
      
      {/* 사용자 탭 */}
      {activeTab === 'members' && (
        <>
          <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="사용자 검색..."
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              </div>
              <select className="border border-gray-300 rounded-md p-2 text-sm">
                <option>모든 역할</option>
                <option>관리자</option>
                <option>프롬프트 관리자</option>
                <option>프롬프트 엔지니어</option>
                <option>편집자</option>
                <option>조회자</option>
              </select>
              <select className="border border-gray-300 rounded-md p-2 text-sm">
                <option>모든 부서</option>
                <option>개발</option>
                <option>마케팅</option>
                <option>콘텐츠</option>
                <option>고객 지원</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter size={16} className="text-gray-500" />
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                <Plus size={14} className="inline-block mr-1" />
                일괄 추가
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">사용자</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">역할</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">부서</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">활성 프롬프트</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">마지막 활동</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">액션</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <img className="h-8 w-8 rounded-full mr-3" src={user.avatarUrl} alt={user.name} />
                          <div>
                            <div className="text-sm font-medium text-gray-800">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.role === '관리자' ? 'bg-purple-100 text-purple-800' :
                          user.role === '프롬프트 관리자' ? 'bg-indigo-100 text-indigo-800' :
                          user.role === '프롬프트 엔지니어' ? 'bg-blue-100 text-blue-800' :
                          user.role === '편집자' ? 'bg-green-100 text-green-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {user.department}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {user.activePrompts}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {user.lastActive}
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button className="p-1 text-gray-500 hover:text-gray-700" title="역할 편집">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-purple-500 hover:text-purple-700" title="권한 관리">
                            <Shield size={16} />
                          </button>
                          <button className="p-1 text-red-500 hover:text-red-700" title="삭제">
                            <Trash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  총 <span className="font-medium">{users.length}</span>명의 사용자
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                    이전
                  </button>
                  <button className="px-3 py-1 border border-blue-600 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                    다음
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <h3 className="font-semibold text-gray-800 mb-4">사용자 활동 요약</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">가장 활발한 사용자</h4>
                <div className="space-y-2">
                  {users.sort((a, b) => b.activePrompts - a.activePrompts).slice(0, 3).map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img className="h-6 w-6 rounded-full mr-2" src={user.avatarUrl} alt={user.name} />
                        <span className="text-sm">{user.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{user.activePrompts}개 프롬프트</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">역할별 분포</h4>
                <div className="space-y-2">
                  {roles.map((role, index) => (
                    <div key={index} className="text-xs">
                      <div className="flex justify-between items-center mb-1">
                        <span>{role.name}</span>
                        <span>{role.userCount}명</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${
                          role.name === '관리자' ? 'bg-purple-500' :
                          role.name === '프롬프트 관리자' ? 'bg-indigo-500' :
                          role.name === '프롬프트 엔지니어' ? 'bg-blue-500' :
                          role.name === '편집자' ? 'bg-green-500' : 
                          'bg-gray-500'
                        }`} style={{ width: `${(role.userCount / users.length) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">부서별 분포</h4>
                <div className="space-y-2">
                  {['개발', '마케팅', '콘텐츠', '고객 지원'].map((dept, index) => {
                    const count = users.filter(m => m.department === dept).length;
                    return (
                      <div key={index} className="text-xs">
                        <div className="flex justify-between items-center mb-1">
                          <span>{dept}</span>
                          <span>{count}명</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full ${
                            index === 0 ? 'bg-blue-500' :
                            index === 1 ? 'bg-green-500' :
                            index === 2 ? 'bg-amber-500' : 
                            'bg-red-500'
                          }`} style={{ width: `${(count / users.length) * 100}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* 역할 및 권한 탭 */}
      {activeTab === 'roles' && (
        <>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium text-gray-800">역할 관리</h3>
                  <p className="text-sm text-gray-500 mt-1">사용자에게 할당할 권한을 정의하세요</p>
                </div>
                <button className="px-2 py-1 text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-md hover:bg-blue-100">
                  <Plus size={14} className="inline-block mr-1" />
                  새 역할 추가
                </button>
              </div>
              
              <div className="space-y-3">
                {roles.map(role => (
                  <div key={role.id} className="border border-gray-200 rounded-md p-3 relative">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-800">{role.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{role.description}</p>
                      </div>
                      <span className="text-xs text-gray-500">{role.userCount}명 사용 중</span>
                    </div>
                    
                    <div className="mt-3 text-xs">
                      <span className="font-medium text-gray-700 mr-2">권한:</span>
                      <div className="flex flex-wrap mt-1">
                        {role.permissions.map((perm, idx) => (
                          <span key={idx} className="mr-1 mb-1 px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                            {perm === 'create' && '생성'}
                            {perm === 'edit' && '편집'}
                            {perm === 'delete' && '삭제'}
                            {perm === 'invite' && '초대'}
                            {perm === 'assign_roles' && '역할 할당'}
                            {perm === 'test' && '테스트'}
                            {perm === 'view_analytics' && '분석 조회'}
                            {perm === 'view' && '조회'}
                            {perm === 'execute' && '실행'}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="absolute top-3 right-3">
                      <button className="text-gray-400 hover:text-gray-600">
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <div className="mb-4">
                <h3 className="font-medium text-gray-800">권한 설정</h3>
                <p className="text-sm text-gray-500 mt-1">각 권한이 허용하는 작업을 정의하세요</p>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="font-medium text-gray-800 mb-2">프롬프트 관리</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm text-gray-700">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked readOnly />
                        프롬프트 생성
                      </label>
                      <select className="border border-gray-200 rounded text-xs p-1">
                        <option>관리자</option>
                        <option>프롬프트 관리자</option>
                        <option>프롬프트 엔지니어</option>
                        <option>편집자</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm text-gray-700">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked readOnly />
                        프롬프트 편집
                      </label>
                      <select className="border border-gray-200 rounded text-xs p-1">
                        <option>관리자</option>
                        <option>프롬프트 관리자</option>
                        <option>프롬프트 엔지니어</option>
                        <option>편집자</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm text-gray-700">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked readOnly />
                        프롬프트 삭제
                      </label>
                      <select className="border border-gray-200 rounded text-xs p-1">
                        <option>관리자</option>
                        <option>프롬프트 관리자</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="font-medium text-gray-800 mb-2">사용자 관리</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm text-gray-700">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked readOnly />
                        사용자 추가
                      </label>
                      <select className="border border-gray-200 rounded text-xs p-1">
                        <option>관리자</option>
                        <option>프롬프트 관리자</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm text-gray-700">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked readOnly />
                        역할 할당
                      </label>
                      <select className="border border-gray-200 rounded text-xs p-1">
                        <option>관리자</option>
                        <option>프롬프트 관리자</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="font-medium text-gray-800 mb-2">고급 기능</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm text-gray-700">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked readOnly />
                        분석 데이터 접근
                      </label>
                      <select className="border border-gray-200 rounded text-xs p-1">
                        <option>관리자</option>
                        <option>프롬프트 관리자</option>
                        <option>프롬프트 엔지니어</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm text-gray-700">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked readOnly />
                        테스트 실행
                      </label>
                      <select className="border border-gray-200 rounded text-xs p-1">
                        <option>관리자</option>
                        <option>프롬프트 관리자</option>
                        <option>프롬프트 엔지니어</option>
                        <option>편집자</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm text-gray-700">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" checked readOnly />
                        A/B 테스트 실행
                      </label>
                      <select className="border border-gray-200 rounded text-xs p-1">
                        <option>관리자</option>
                        <option>프롬프트 관리자</option>
                        <option>프롬프트 엔지니어</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  <CheckCircle size={14} className="inline-block mr-1" />
                  변경사항 저장
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-medium text-gray-800">역할별 권한 매트릭스</h3>
                <p className="text-sm text-gray-500 mt-1">각 역할에게 부여된 권한을 한눈에 확인하세요</p>
              </div>
              <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                <Copy size={14} className="inline-block mr-1" />
                CSV로 내보내기
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 border border-gray-200">기능 / 역할</th>
                    {roles.map(role => (
                      <th key={role.id} className="px-4 py-2 text-center text-xs font-semibold text-gray-500 border border-gray-200">
                        {role.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {['프롬프트 생성', '프롬프트 편집', '프롬프트 삭제', '사용자 추가', '역할 할당', '분석 데이터 접근', '테스트 실행', 'A/B 테스트 실행'].map((action, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 text-xs text-gray-700 border border-gray-200">{action}</td>
                      {roles.map(role => (
                        <td key={role.id} className="px-4 py-2 text-center border border-gray-200">
                          {(action === '프롬프트 생성' && ['관리자', '프롬프트 관리자', '프롬프트 엔지니어', '편집자'].includes(role.name)) ||
                           (action === '프롬프트 편집' && ['관리자', '프롬프트 관리자', '프롬프트 엔지니어', '편집자'].includes(role.name)) ||
                           (action === '프롬프트 삭제' && ['관리자', '프롬프트 관리자'].includes(role.name)) ||
                           (action === '사용자 추가' && ['관리자', '프롬프트 관리자'].includes(role.name)) ||
                           (action === '역할 할당' && ['관리자', '프롬프트 관리자'].includes(role.name)) ||
                           (action === '분석 데이터 접근' && ['관리자', '프롬프트 관리자', '프롬프트 엔지니어'].includes(role.name)) ||
                           (action === '테스트 실행' && ['관리자', '프롬프트 관리자', '프롬프트 엔지니어', '편집자'].includes(role.name)) ||
                           (action === 'A/B 테스트 실행' && ['관리자', '프롬프트 관리자', '프롬프트 엔지니어'].includes(role.name)) ? (
                            <CheckCircle size={16} className="inline-block text-green-500" />
                          ) : (
                            <X size={16} className="inline-block text-red-400" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserManagement;