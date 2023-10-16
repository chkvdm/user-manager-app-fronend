import { Outlet } from 'react-router-dom';
import UserStatusCheck from './userStatusCheck';

export default function ProtectedRoutes() {
  UserStatusCheck();
  return <Outlet />;
}
