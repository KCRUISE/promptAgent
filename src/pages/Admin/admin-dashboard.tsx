import React, { useState } from 'react';
import { 
  Database, Server, Users, Settings, Shield, FileText, BarChart2, Search, 
  Bell, AlertTriangle, CheckCircle, Clock, Download, RefreshCw, HardDrive, 
  Calendar, ArrowRight, Trash, Edit, Activity, Lock, Key, UserPlus
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">시스템 관리자 대시보드</h2>
        <div className="flex items-center space-x-2">
          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">관리자 모드</span>
          <button className="px-3 py-1.5 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200">
            <Lock size={14} className="inline-block mr-1" />
            관리자 모드 종료
          </button>
        </div>
      </div>
      
      {/* 관리자 탭 네비게이션 */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-1 ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <BarChart2 size={16} className="inline-block mr-1" />
            시스템 개요
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`pb-3 px-1 ${activeTab === 'users' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Users size={16} className="inline-block mr-1" />
            사용자 관리
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`pb-3 px-1 ${activeTab === 'api' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Key size={16} className="inline-block mr-1" />
            API 설정
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`pb-3 px-1 ${activeTab === 'database' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Database size={16} className="inline-block mr-1" />
            데이터베이스
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`pb-3 px-1 ${activeTab === 'logs' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <FileText size={16} className="inline-block mr-1" />
            시스템 로그
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`pb-3 px-1 ${activeTab === 'backup' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <HardDrive size={16} className="inline-block mr-1" />
            백업 및 복원
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 px-1 ${activeTab === 'settings' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Settings size={16} className="inline-block mr-1" />
            시스템 설정
          </button>
        </nav>
      </div>
      
      {/* 시스템 개요 탭 */}
      {activeTab === 'overview' && <SystemOverviewTab />}
      
      {/* 사용자 관리 탭 */}
      {activeTab === 'users' && <UserManagementTab />}
      
      {/* API 설정 탭 */}
      {activeTab === 'api' && <ApiSettingsTab />}
      
      {/* 데이터베이스 탭 */}
      {activeTab === 'database' && <DatabaseTab />}
      
      {/* 시스템 로그 탭 */}
      {activeTab === 'logs' && <SystemLogsTab />}
      
      {/* 백업 및 복원 탭 */}
      {activeTab === 'backup' && <BackupTab />}
      
      {/* 시스템 설정 탭 */}
      {activeTab === 'settings' && <SystemSettingsTab />}
    </div>
  );
};

// 시스템 개요 탭 컴포넌트
const SystemOverviewTab = () => {
  return (
    <>
      {/* 상태 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-50 text-green-600 mr-4">
              <Server size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">시스템 상태</p>
              <p className="text-xl font-bold flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                정상
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
              <Database size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">데이터베이스</p>
              <p className="text-xl font-bold">87% <span className="text-xs font-normal text-gray-500">/ 10GB</span></p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-50 text-purple-600 mr-4">
              <Users size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">활성 사용자</p>
              <p className="text-xl font-bold">28 <span className="text-xs font-normal text-gray-500">/ 50 라이선스</span></p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-amber-50 text-amber-600 mr-4">
              <Bell size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">알림</p>
              <p className="text-xl font-bold">2 <span className="text-xs font-normal text-gray-500">경고</span></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 주요 지표 그래프 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-800">시스템 리소스 사용량</h3>
            <select className="border border-gray-300 rounded-md p-1 text-xs">
              <option>지난 24시간</option>
              <option>지난 7일</option>
              <option>지난 30일</option>
            </select>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity size={48} className="mx-auto text-gray-300 mb-2" />
              <p className="text-gray-500">여기에 시스템 리소스 사용량 차트가 표시됩니다</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-800">API 호출 현황</h3>
            <select className="border border-gray-300 rounded-md p-1 text-xs">
              <option>지난 24시간</option>
              <option>지난 7일</option>
              <option>지난 30일</option>
            </select>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity size={48} className="mx-auto text-gray-300 mb-2" />
              <p className="text-gray-500">여기에 API 호출 현황 차트가 표시됩니다</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 알림 및 로그 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">최근 시스템 이벤트</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">모두 보기</button>
          </div>
          <div className="p-4">
            <ul className="divide-y divide-gray-200">
              <li className="py-3">
                <div className="flex items-start">
                  <CheckCircle size={16} className="mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-800">시스템 업데이트 완료</p>
                    <p className="text-xs text-gray-500">v1.2.5로 업데이트가 성공적으로 완료되었습니다.</p>
                  </div>
                  <div className="text-xs text-gray-500">10분 전</div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-start">
                  <AlertTriangle size={16} className="mt-0.5 mr-2 text-amber-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-800">디스크 용량 경고</p>
                    <p className="text-xs text-gray-500">백업 디렉토리의 용량이 90%를 초과했습니다.</p>
                  </div>
                  <div className="text-xs text-gray-500">3시간 전</div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-start">
                  <AlertTriangle size={16} className="mt-0.5 mr-2 text-red-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-800">API 오류 증가</p>
                    <p className="text-xs text-gray-500">외부 API 호출 실패율이 5%를 초과했습니다.</p>
                  </div>
                  <div className="text-xs text-gray-500">1일 전</div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-start">
                  <CheckCircle size={16} className="mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-800">데이터베이스 백업 완료</p>
                    <p className="text-xs text-gray-500">정기 백업이 성공적으로 완료되었습니다.</p>
                  </div>
                  <div className="text-xs text-gray-500">1일 전</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">시스템 정보</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              <RefreshCw size={14} />
            </button>
          </div>
          <div className="p-4">
            <dl className="space-y-3">
              <div>
                <dt className="text-xs text-gray-500">운영 체제</dt>
                <dd className="text-sm font-medium">Linux (Ubuntu 22.04)</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">서버 버전</dt>
                <dd className="text-sm font-medium">v1.2.5</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Node.js 버전</dt>
                <dd className="text-sm font-medium">18.12.1</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">데이터베이스</dt>
                <dd className="text-sm font-medium">MySQL 8.0.28</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">마지막 재시작</dt>
                <dd className="text-sm font-medium">2025-03-20 08:15:22</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">업타임</dt>
                <dd className="text-sm font-medium">3일 12시간 42분</dd>
              </div>
            </dl>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                상세 시스템 보고서
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 사용자 관리 탭 컴포넌트
const UserManagementTab = () => {
  // 샘플 사용자 데이터
  const users = [
    { id: 1, name: '김민수', email: 'minsu.kim@example.com', role: '관리자', department: '개발', status: 'active', lastLogin: '오늘 14:32' },
    { id: 2, name: '이지연', email: 'jiyeon.lee@example.com', role: '프롬프트 엔지니어', department: '마케팅', status: 'active', lastLogin: '오늘 10:15' },
    { id: 3, name: '박지민', email: 'jimin.park@example.com', role: '편집자', department: '콘텐츠', status: 'inactive', lastLogin: '2025-03-15 09:20' },
    { id: 4, name: '최하늘', email: 'haneul.choi@example.com', role: '프롬프트 엔지니어', department: '개발', status: 'active', lastLogin: '어제 16:45' },
    { id: 5, name: '정다운', email: 'dawoon.jung@example.com', role: '조회자', department: '고객 지원', status: 'active', lastLogin: '오늘 11:30' }
  ];
  
  return (
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
            <option>모든 상태</option>
            <option>활성</option>
            <option>비활성</option>
            <option>잠김</option>
          </select>
          <select className="border border-gray-300 rounded-md p-2 text-sm">
            <option>모든 역할</option>
            <option>관리자</option>
            <option>프롬프트 관리자</option>
            <option>프롬프트 엔지니어</option>
            <option>편집자</option>
            <option>조회자</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
            <Shield size={14} className="inline-block mr-1" />
            역할 관리
          </button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            <UserPlus size={14} className="inline-block mr-1" />
            사용자 추가
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">상태</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">마지막 로그인</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
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
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.department}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' :
                      user.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {user.status === 'active' ? '활성' : 
                       user.status === 'inactive' ? '비활성' : '잠김'}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div className="flex justify-center space-x-2">
                      <button className="p-1 text-gray-500 hover:text-gray-700" title="편집">
                        <Edit size={16} />
                      </button>
                      <button className="p-1 text-purple-500 hover:text-purple-700" title="권한 관리">
                        <Shield size={16} />
                      </button>
                      <button className="p-1 text-red-500 hover:text-red-700" title="비활성화">
                        <Lock size={16} />
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
              총 <span className="font-medium">{users.length}</span>명의 사용자 (전체 28명 중)
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                이전
              </button>
              <button className="px-3 py-1 border border-blue-600 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-4">사용자 통계</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">총 사용자</p>
              <p className="text-xl font-bold">28</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">활성 사용자</p>
              <p className="text-xl font-bold">24</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">관리자</p>
              <p className="text-xl font-bold">2</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">신규 사용자 (이번 달)</p>
              <p className="text-xl font-bold">5</p>
            </div>
          </div>
          
          <h4 className="font-medium text-sm text-gray-700 mb-2">역할별 사용자 분포</h4>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>관리자</span>
                <span>2명 (7.1%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '7.1%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>프롬프트 엔지니어</span>
                <span>10명 (35.7%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '35.7%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>편집자</span>
                <span>8명 (28.6%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '28.6%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>조회자</span>
                <span>8명 (28.6%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-gray-500 h-1.5 rounded-full" style={{ width: '28.6%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-4">최근 로그인 활동</h3>
          <ul className="divide-y divide-gray-200">
            <li className="py-3">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  L
                </div>
                <div className="ml-3 flex-grow">
                  <div className="text-sm font-medium text-gray-900">이지연</div>
                  <div className="text-xs text-gray-500">로그인 성공</div>
                </div>
                <div className="text-xs text-gray-500">10분 전</div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium">
                  J
                </div>
                <div className="ml-3 flex-grow">
                  <div className="text-sm font-medium text-gray-900">정다운</div>
                  <div className="text-xs text-gray-500">로그인 성공</div>
                </div>
                <div className="text-xs text-gray-500">2시간 전</div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-medium">
                  P
                </div>
                <div className="ml-3 flex-grow">
                  <div className="text-sm font-medium text-gray-900">박지민</div>
                  <div className="text-xs text-gray-500">로그인 실패 (암호 오류)</div>
                </div>
                <div className="text-xs text-gray-500">3시간 전</div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
                  K
                </div>
                <div className="ml-3 flex-grow">
                  <div className="text-sm font-medium text-gray-900">김민수</div>
                  <div className="text-xs text-gray-500">로그인 성공</div>
                </div>
                <div className="text-xs text-gray-500">4시간 전</div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                  C
                </div>
                <div className="ml-3 flex-grow">
                  <div className="text-sm font-medium text-gray-900">최하늘</div>
                  <div className="text-xs text-gray-500">로그아웃</div>
                </div>
                <div className="text-xs text-gray-500">6시간 전</div>
              </div>
            </li>
          </ul>
          <div className="mt-3 text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              모든 활동 보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// API 설정 탭 컴포넌트
const ApiSettingsTab = () => {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">API 연결 설정</h3>
          <p className="text-sm text-gray-500 mt-1">외부 AI 모델 API 설정을 관리하세요</p>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-800">OpenAI API</h4>
                    <p className="text-xs text-gray-500 mt-1">GPT 모델 접근을 위한 API 설정</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    연결됨
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      API 키
                    </label>
                    <div className="flex">
                      <input 
                        type="password"
                        value="••••••••••••••••••••••••"
                        disabled
                        className="flex-grow border border-gray-300 rounded-l-md p-2 text-sm bg-gray-50"
                      />
                      <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r-md border border-gray-300 border-l-0">
                        보기
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        기본 모델
                      </label>
                      <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                        <option>gpt-4-turbo</option>
                        <option>gpt-4</option>
                        <option>gpt-3.5-turbo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        요청 타임아웃
                      </label>
                      <input 
                        type="number"
                        defaultValue="30"
                        className="w-full border border-gray-300 rounded-md p-2 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                      설정 초기화
                    </button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      저장
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Anthropic API</h4>
                    <p className="text-xs text-gray-500 mt-1">Claude 모델 접근을 위한 API 설정</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    연결됨
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      API 키
                    </label>
                    <div className="flex">
                      <input 
                        type="password"
                        value="••••••••••••••••••••••••"
                        disabled
                        className="flex-grow border border-gray-300 rounded-l-md p-2 text-sm bg-gray-50"
                      />
                      <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r-md border border-gray-300 border-l-0">
                        보기
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        기본 모델
                      </label>
                      <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                        <option>claude-3-opus</option>
                        <option>claude-3-sonnet</option>
                        <option>claude-3-haiku</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        요청 타임아웃
                      </label>
                      <input 
                        type="number"
                        defaultValue="30"
                        className="w-full border border-gray-300 rounded-md p-2 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                      설정 초기화
                    </button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      저장
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Google AI API</h4>
                    <p className="text-xs text-gray-500 mt-1">Gemini 모델 접근을 위한 API 설정</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                    미연결
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      API 키
                    </label>
                    <div className="flex">
                      <input 
                        type="text"
                        placeholder="API 키를 입력하세요"
                        className="flex-grow border border-gray-300 rounded-l-md p-2 text-sm"
                      />
                      <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r-md border border-gray-300 border-l-0">
                        확인
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        기본 모델
                      </label>
                      <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                        <option>gemini-pro</option>
                        <option>gemini-pro-vision</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        요청 타임아웃
                      </label>
                      <input 
                        type="number"
                        defaultValue="30"
                        className="w-full border border-gray-300 rounded-md p-2 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                      취소
                    </button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      연결
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-800">API 사용량 제한</h4>
                    <p className="text-xs text-gray-500 mt-1">API 토큰 사용량 제한 설정</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">사용량 제한 활성화</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      일일 토큰 사용량 제한
                    </label>
                    <input 
                      type="number"
                      defaultValue="100000"
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      사용자별 토큰 사용량 제한
                    </label>
                    <input 
                      type="number"
                      defaultValue="10000"
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                      설정 초기화
                    </button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      저장
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">API 사용량 요약</h3>
            <p className="text-sm text-gray-500 mt-1">모델별 토큰 사용량 및 비용</p>
          </div>
          
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-800">OpenAI (GPT-4)</span>
                <div className="flex space-x-2 text-xs">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">이번 달: $152.24</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full">1.7M 토큰</span>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-800">Anthropic (Claude)</span>
                <div className="flex space-x-2 text-xs">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">이번 달: $78.12</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full">950K 토큰</span>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '35%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-800">Google (Gemini)</span>
                <div className="flex space-x-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">이번 달: $0</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full">0 토큰</span>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            <hr className="my-4 border-gray-200" />
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-800">총계</span>
              <div className="flex space-x-2 text-xs">
                <span className="px-2 py-1 bg-gray-800 text-white rounded-full">이번 달: $230.36</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full">2.65M 토큰</span>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                자세한 사용량 보고서
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">API 상태 모니터링</h3>
            <p className="text-sm text-gray-500 mt-1">외부 API 서비스 상태</p>
          </div>
          
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm font-medium text-gray-800">OpenAI API</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">평균 응답 시간: 230ms</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">정상</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm font-medium text-gray-800">Anthropic API</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">평균 응답 시간: 310ms</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">정상</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm font-medium text-gray-800">Google AI API</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">평균 응답 시간: --</span>
                  <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">미연결</span>
                </div>
              </div>
            </div>
            
            <hr className="my-4 border-gray-200" />
            
            <h4 className="font-medium text-sm text-gray-700 mb-3">최근 API 오류</h4>
            <ul className="space-y-2">
              <li className="p-2 bg-red-50 rounded-md text-sm">
                <div className="flex items-start">
                  <AlertTriangle size={16} className="mt-0.5 mr-2 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-medium">OpenAI API 오류</p>
                    <p className="text-xs text-red-700">Rate limit exceeded (429)</p>
                    <p className="text-xs text-gray-500 mt-1">오늘 13:42</p>
                  </div>
                </div>
              </li>
              <li className="p-2 bg-red-50 rounded-md text-sm">
                <div className="flex items-start">
                  <AlertTriangle size={16} className="mt-0.5 mr-2 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-medium">Anthropic API 타임아웃</p>
                    <p className="text-xs text-red-700">Request timed out (504)</p>
                    <p className="text-xs text-gray-500 mt-1">어제 21:15</p>
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="mt-4 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                모든 오류 로그 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 데이터베이스 탭 컴포넌트
const DatabaseTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-3">데이터베이스 상태</h3>
          <div className="flex items-center mb-4">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm font-medium text-gray-800">연결됨</span>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">호스트</dt>
              <dd className="font-medium">db.promptapp.com</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">MySQL 버전</dt>
              <dd className="font-medium">8.0.28</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">데이터베이스 크기</dt>
              <dd className="font-medium">8.7GB / 10GB</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">마지막 백업</dt>
              <dd className="font-medium">오늘 04:00</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">연결 수</dt>
              <dd className="font-medium">12 활성화</dd>
            </div>
          </dl>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-3">테이블 정보</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="text-sm">users</span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">28 rows</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">prompts</span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">156 rows</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">prompt_versions</span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">483 rows</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">test_results</span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">1,247 rows</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">prompt_tags</span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">42 rows</span>
            </li>
          </ul>
          <div className="mt-3 text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              모든 테이블 보기
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-3">데이터베이스 작업</h3>
          <div className="space-y-2">
            <button className="w-full py-2 px-3 bg-blue-50 text-blue-600 border border-blue-200 rounded-md text-sm hover:bg-blue-100 text-left flex items-center">
              <RefreshCw size={14} className="mr-2" />
              데이터베이스 최적화
            </button>
            <button className="w-full py-2 px-3 bg-blue-50 text-blue-600 border border-blue-200 rounded-md text-sm hover:bg-blue-100 text-left flex items-center">
              <Download size={14} className="mr-2" />
              데이터베이스 백업
            </button>
            <button className="w-full py-2 px-3 bg-blue-50 text-blue-600 border border-blue-200 rounded-md text-sm hover:bg-blue-100 text-left flex items-center">
              <Database size={14} className="mr-2" />
              데이터베이스 마이그레이션
            </button>
            <button className="w-full py-2 px-3 bg-red-50 text-red-600 border border-red-200 rounded-md text-sm hover:bg-red-100 text-left flex items-center">
              <Trash size={14} className="mr-2" />
              데이터 초기화
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-gray-800">데이터베이스 쿼리 실행</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800">쿼리 기록</button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <textarea 
              placeholder="SELECT * FROM prompts LIMIT 10;"
              className="w-full border border-gray-300 rounded-md p-3 text-sm h-32 font-mono"
            ></textarea>
          </div>
          
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                실행
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                초기화
              </button>
            </div>
            <select className="border border-gray-300 rounded-md p-1.5 text-sm">
              <option>직접 입력</option>
              <option>저장된 쿼리</option>
              <option>테이블 구조 조회</option>
            </select>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-center">
            <p className="text-gray-500">쿼리 결과가 여기에 표시됩니다</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">성능 모니터링</h3>
            <p className="text-sm text-gray-500 mt-1">데이터베이스 성능 지표</p>
          </div>
          
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>쿼리 응답 시간</span>
                  <span className="font-medium">45ms (평균)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>연결 풀 사용량</span>
                  <span className="font-medium">12 / 50 (24%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>캐시 적중률</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>디스크 I/O</span>
                  <span className="font-medium">1.2MB/s</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                자세한 성능 분석
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">백업 기록</h3>
            <p className="text-sm text-gray-500 mt-1">최근 데이터베이스 백업 기록</p>
          </div>
          
          <div className="p-4">
            <ul className="divide-y divide-gray-200">
              <li className="py-3">
                <div className="flex items-start">
                  <CheckCircle size={16} className="mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-800">전체 백업</p>
                    <p className="text-xs text-gray-500">파일 크기: 8.7GB</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-700 font-medium">2025-03-24 04:00</div>
                    <button className="text-xs text-blue-600 hover:text-blue-800">복원</button>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-start">
                  <CheckCircle size={16} className="mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-800">전체 백업</p>
                    <p className="text-xs text-gray-500">파일 크기: 8.5GB</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-700 font-medium">2025-03-23 04:00</div>
                    <button className="text-xs text-blue-600 hover:text-blue-800">복원</button>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-start">
                  <CheckCircle size={16} className="mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-800">전체 백업</p>
                    <p className="text-xs text-gray-500">파일 크기: 8.4GB</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-700 font-medium">2025-03-22 04:00</div>
                    <button className="text-xs text-blue-600 hover:text-blue-800">복원</button>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-start">
                  <CheckCircle size={16} className="mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-800">수동 백업</p>
                    <p className="text-xs text-gray-500">파일 크기: 8.4GB</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-700 font-medium">2025-03-21 15:27</div>
                    <button className="text-xs text-blue-600 hover:text-blue-800">복원</button>
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="mt-3 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                모든 백업 기록
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 시스템 로그 탭 컴포넌트
const SystemLogsTab = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <select className="border border-gray-300 rounded-md p-2 text-sm">
            <option>모든 로그 유형</option>
            <option>오류</option>
            <option>경고</option>
            <option>정보</option>
          </select>
          <select className="border border-gray-300 rounded-md p-2 text-sm">
            <option>모든 구성 요소</option>
            <option>API</option>
            <option>데이터베이스</option>
            <option>인증</option>
            <option>시스템</option>
          </select>
          <div className="relative">
            <input 
              type="text" 
              placeholder="로그 검색..."
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
            <Download size={14} className="inline-block mr-1" />
            내보내기
          </button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            <RefreshCw size={14} className="inline-block mr-1" />
            새로고침
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-gray-800">시스템 로그</h3>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md p-1.5 text-sm">
              <option>최신순</option>
              <option>오래된순</option>
              <option>심각도순</option>
            </select>
            <select className="border border-gray-300 rounded-md p-1.5 text-sm">
              <option>지난 24시간</option>
              <option>지난 7일</option>
              <option>지난 30일</option>
              <option>모든 기간</option>
            </select>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 text-xs font-mono whitespace-pre overflow-x-auto max-h-96 custom-scrollbar">
          <div className="text-red-600">[2025-03-24 14:42:15] [ERROR] [API] Rate limit exceeded for API key sk_****. Status code: 429</div>
          <div className="text-gray-600">[2025-03-24 14:42:10] [INFO] [Auth] User login: minsu.kim@example.com (ID: 1)</div>
          <div className="text-gray-600">[2025-03-24 14:35:22] [INFO] [API] API call to /api/prompts/test completed in 2.34s</div>
          <div className="text-gray-600">[2025-03-24 14:30:05] [INFO] [System] Cache cleared by admin (ID: 1)</div>
          <div className="text-amber-600">[2025-03-24 14:15:38] [WARN] [DB] Database disk usage exceeds 85%</div>
          <div className="text-gray-600">[2025-03-24 14:12:33] [INFO] [API] API call to /api/prompts/test completed in 1.87s</div>
          <div className="text-gray-600">[2025-03-24 13:58:12] [INFO] [Auth] User login: jiyeon.lee@example.com (ID: 2)</div>
          <div className="text-gray-600">[2025-03-24 13:45:20] [INFO] [API] API call to /api/prompts/test completed in 2.12s</div>
          <div className="text-gray-600">[2025-03-24 13:30:18] [INFO] [System] Application started successfully</div>
          <div className="text-gray-600">[2025-03-24 13:30:15] [INFO] [DB] Database connection established</div>
          <div className="text-gray-600">[2025-03-24 13:30:10] [INFO] [System] Application starting...</div>
          <div className="text-red-600">[2025-03-24 08:45:25] [ERROR] [API] Timeout error when calling Anthropic API. Status code: 504</div>
          <div className="text-gray-600">[2025-03-24 08:30:12] [INFO] [System] Daily backup completed successfully</div>
          <div className="text-gray-600">[2025-03-24 08:15:22] [INFO] [System] System restarted after maintenance</div>
          <div className="text-gray-600">[2025-03-24 08:00:05] [INFO] [System] Maintenance mode activated by admin (ID: 1)</div>
          <div className="text-amber-600">[2025-03-24 04:15:12] [WARN] [DB] Slow query detected: SELECT * FROM prompt_versions WHERE prompt_id = '123' (Duration: 2.5s)</div>
          <div className="text-gray-600">[2025-03-24 04:00:00] [INFO] [DB] Automated database backup started</div>
          <div className="text-gray-600">[2025-03-24 03:59:58] [INFO] [System] Scheduled task: Daily backup triggered</div>
          <div className="text-gray-600">[2025-03-24 00:05:15] [INFO] [System] Daily analytics processing completed</div>
          <div className="text-gray-600">[2025-03-24 00:00:00] [INFO] [System] Scheduled task: Daily analytics processing started</div>
        </div>
        
        <div className="px-4 py-3 bg-white border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-700">
            총 <span className="font-medium">1,247</span>개의 로그
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              이전
            </button>
            <button className="px-3 py-1 border border-blue-600 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-3">로그 유형 분포</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-gray-500 mr-1"></span>
                  정보 (INFO)
                </span>
                <span>1,156건 (92.7%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-500 h-2 rounded-full" style={{ width: '92.7%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-amber-500 mr-1"></span>
                  경고 (WARN)
                </span>
                <span>58건 (4.7%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '4.7%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                  오류 (ERROR)
                </span>
                <span>33건 (2.6%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '2.6%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-3">컴포넌트별 로그</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>API</span>
                <span>542건 (43.5%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '43.5%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>시스템</span>
                <span>350건 (28.1%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '28.1%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>데이터베이스</span>
                <span>215건 (17.2%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '17.2%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>인증</span>
                <span>140건 (11.2%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '11.2%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-3">로그 설정</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                로그 레벨
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option>DEBUG</option>
                <option selected>INFO</option>
                <option>WARN</option>
                <option>ERROR</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                로그 보관 기간
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option>7일</option>
                <option>14일</option>
                <option selected>30일</option>
                <option>90일</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" defaultChecked />
                디스크 공간 경고 활성화
              </label>
            </div>
            
            <div>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" defaultChecked />
                로그 자동 압축
              </label>
            </div>
            
            <div>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" />
                외부 로그 서비스 연결
              </label>
            </div>
            
            <div className="mt-3">
              <button className="w-full py-2 px-3 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                설정 저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 백업 및 복원 탭 컴포넌트
const BackupTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-3">백업 상태</h3>
          <div className="space-y-3">
            <div className="flex items-center mb-3">
              <CheckCircle size={16} className="text-green-500 mr-2" />
              <span className="text-sm font-medium text-gray-800">정상</span>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 mb-1">마지막 백업</p>
              <p className="text-sm font-medium">2025-03-24 04:00:00</p>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 mb-1">마지막 백업 크기</p>
              <p className="text-sm font-medium">8.7GB</p>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 mb-1">백업 저장소 사용량</p>
              <p className="text-sm font-medium">47.3GB / 100GB (47.3%)</p>
            </div>
            
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '47.3%' }}></div>
              </div>
              <p className="text-xs text-gray-500">약 11개의 백업 파일 저장됨</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="font-medium text-gray-800 mb-3">백업 설정</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  자동 백업 일정
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option>사용 안함</option>
                  <option>매일</option>
                  <option selected>매일 (04:00)</option>
                  <option>매주 일요일</option>
                  <option>매월 1일</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  백업 보관 정책
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option>최근 3개 백업 유지</option>
                  <option>최근 7개 백업 유지</option>
                  <option selected>최근 14개 백업 유지</option>
                  <option>최근 30개 백업 유지</option>
                  <option>모든 백업 유지</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  백업 저장 위치
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option selected>로컬 디스크</option>
                  <option>클라우드 스토리지</option>
                  <option>NAS</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" defaultChecked />
                  백업 완료 후 알림 받기
                </label>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  백업 유형
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option selected>전체 백업</option>
                  <option>증분 백업</option>
                  <option>차등 백업</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  백업 압축
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option>압축 안함</option>
                  <option selected>기본 압축</option>
                  <option>최대 압축</option>
                </select>
              </div>
              
              <div className="mt-3">
                <button className="w-full py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  설정 저장
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-gray-800">수동 백업 및 복원</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            가이드 보기
          </button>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">백업 생성</h4>
              <div className="space-y-3 mb-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    백업 설명
                  </label>
                  <input 
                    type="text"
                    placeholder="백업에 대한 설명을 입력하세요"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    백업 범위
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                    <option>전체 데이터베이스</option>
                    <option>사용자 데이터</option>
                    <option>프롬프트 데이터</option>
                    <option>설정 데이터</option>
                  </select>
                </div>
              </div>
              
              <button className="w-full py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                수동 백업 생성
              </button>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">백업 복원</h4>
              <div className="space-y-3 mb-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    복원할 백업 선택
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                    <option>2025-03-24 04:00 (8.7GB)</option>
                    <option>2025-03-23 04:00 (8.5GB)</option>
                    <option>2025-03-22 04:00 (8.4GB)</option>
                    <option>2025-03-21 15:27 (수동, 8.4GB)</option>
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center text-xs">
                    <input type="checkbox" className="h-4 w-4 text-red-600 rounded border-gray-300 mr-2" />
                    <span className="text-red-600">기존 데이터를 모두 덮어쓰기합니다.</span>
                  </label>
                </div>
                
                <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
                  <div className="flex items-start">
                    <AlertTriangle size={16} className="mt-0.5 mr-2 text-amber-600 flex-shrink-0" />
                    <p className="text-xs text-amber-800">
                      백업을 복원하면 현재 데이터가 백업 시점의 데이터로 대체됩니다. 이 작업은 되돌릴 수 없습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">
                백업 복원
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 시스템 설정 탭 컴포넌트
const SystemSettingsTab = () => {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">일반 설정</h3>
          <p className="text-sm text-gray-500 mt-1">시스템 일반 설정을 관리합니다</p>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  애플리케이션 이름
                </label>
                <input 
                  type="text"
                  defaultValue="프롬프트 엔지니어링 플랫폼"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  기본 언어
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option selected>한국어</option>
                  <option>English</option>
                  <option>日本語</option>
                  <option>中文</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  시간대
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option selected>Asia/Seoul (UTC+9)</option>
                  <option>America/New_York (UTC-5)</option>
                  <option>Europe/London (UTC+0)</option>
                  <option>Asia/Tokyo (UTC+9)</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  데이터 익명화
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  세션 만료 시간
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option>30분</option>
                  <option selected>1시간</option>
                  <option>2시간</option>
                  <option>4시간</option>
                  <option>8시간</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  로그인 시도 제한
                </label>
                <input 
                  type="number"
                  defaultValue="5"
                  min="1"
                  max="10"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  2단계 인증
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option>사용 안함</option>
                  <option>선택 사항</option>
                  <option selected>관리자만</option>
                  <option>모든 사용자</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  유지보수 모드
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-2">
            <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              초기화
            </button>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
              저장
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">이메일 설정</h3>
            <p className="text-sm text-gray-500 mt-1">알림 및 통지를 위한 이메일 설정</p>
          </div>
          
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP 서버
                </label>
                <input 
                  type="text"
                  defaultValue="smtp.promptapp.com"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  포트
                </label>
                <input 
                  type="number"
                  defaultValue="587"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  사용자명
                </label>
                <input 
                  type="text"
                  defaultValue="notifications@promptapp.com"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호
                </label>
                <input 
                  type="password"
                  defaultValue="••••••••••••"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  보안 연결 (TLS/SSL)
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option>사용 안함</option>
                  <option>TLS</option>
                  <option selected>SSL</option>
                </select>
              </div>
              
              <div className="mt-4 flex justify-between">
                <button className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-200">
                  테스트 이메일 전송
                </button>
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">시스템 업데이트</h3>
            <p className="text-sm text-gray-500 mt-1">소프트웨어 업데이트 설정</p>
          </div>
          
          <div className="p-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
              <div className="flex items-start">
                <CheckCircle size={16} className="mt-0.5 mr-2 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-green-800">최신 버전을 사용 중입니다</p>
                  <p className="text-xs text-green-700 mt-1">현재 버전: v1.2.5 (2025-03-15 출시)</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  업데이트 확인 주기
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option>확인 안함</option>
                  <option>매일</option>
                  <option selected>매주</option>
                  <option>매월</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" defaultChecked />
                  새 업데이트 자동 다운로드
                </label>
              </div>
              
              <div>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2" />
                  자동 설치 (시스템 재시작 필요)
                </label>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                <RefreshCw size={14} className="inline-block mr-1" />
                업데이트 확인
              </button>
              
              <button className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-200">
                업데이트 기록 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;