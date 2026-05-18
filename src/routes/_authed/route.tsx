import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '~/components/layouts/header';

export const Route = createRootRoute({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}