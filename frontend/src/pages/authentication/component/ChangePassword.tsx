import { useAuth } from '../../../hooks/useAuth';
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ChangePasswordData } from '../../../types/auth'
import SpaceLayout from '../../../components/SpaceLayout';
import { Link } from 'react-router-dom';

function ChangePassword() {
    const navigate = useNavigate();
    const { changePassword, isLoading, error } = useAuth();
    const [formData, setFormData] = useState<ChangePasswordData>({ password: '' });
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        await changePassword(formData);
        navigate('/signin')
        } catch (err) {
        console.error('Sign up error:', err);
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));}
    return(
           <SpaceLayout>
        <div className="min-h-screen flex items-center justify-center px-4 ">
            <Link 
                to="/" 
                className='absolute top-5 left-5'>
                <ArrowLeft className="text-[var(--color-cyan-400)] w-4 h-4"/>
            </Link>
            <div className="w-full max-w-md p-4">
            {/**logo */}
            <div className="mb-4 ">
                <div className="flex items-center justify-center">
                    <img src="/botforge_logo_clean.svg" alt="" className="w-40" />
                </div>
                <h1 className="text-xl font-semibold text-white mt-2 text-center mb-1 leading-relaxed">Forgot Password</h1>
                <p className="text-sm text-[var(--color-gray-400)] text-center leading-relaxed">Recover password</p>
            </div>
            {error && (
                <div className="mb-5 p-3 rounded-lg border border-red-500/30 bg-red-500/10">
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
           )}
            <form onSubmit={handleSubmit} className="space-y-4">
                 <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--color-gray-400)] mb-1.5">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-[var(--color-gray-500)] border border-[var(--color-cyan-400-20)] focus:outline-none focus:border-[var(--color-cyan-400-50)] transition-colors"
                style={{ background: 'rgba(34,211,238,0.05)' }}
              />
            </div> 
            <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-2.5 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: `linear-gradient(to right, var(--color-cyan-400), var(--color-cyan-500))` }}
                >
                {isLoading ? 'Checking' : 'Check'}
            </button>

            </form>
            </div>
        </div>
    </SpaceLayout>
    );

}

export default ChangePassword