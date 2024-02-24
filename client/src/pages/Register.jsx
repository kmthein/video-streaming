import AuthForm from '@/components/auth/AuthForm'
import React from 'react'

const Register = () => {
  return (
    <div className="flex">
      <AuthForm isLogin={false} />
    </div>
  )
}

export default Register