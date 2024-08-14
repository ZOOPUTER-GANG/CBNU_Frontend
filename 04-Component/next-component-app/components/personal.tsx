// 페이지 컴포넌트 형식을 참조
import { NextPage } from 'next';

type PersonalProps = {
  name: string;
  email: string;
  phone: string;
  age: number;
  children: React.ReactNode;
};

const Personal: NextPage<PersonalProps> = (props) => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          개인 프로필 정보
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {props.children}
        </p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">성명</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {props.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">메일주소</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {props.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">전화번호</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {props.phone}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Personal;
