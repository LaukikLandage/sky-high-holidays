import React from 'react';
import { Button } from './ui/Button';
import { RefreshCcw, Home } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-8">
            <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <RefreshCcw className="w-10 h-10 text-[#FF7A00] animate-spin-slow" />
            </div>
            <h1 className="text-4xl font-black text-[#020617] tracking-tight">Something went wrong</h1>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              The application encountered an unexpected error. Don't worry, your travel plans are safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => window.location.reload()}
                className="flex-1 h-14 rounded-full font-black uppercase tracking-widest"
              >
                Refresh Page
              </Button>
              <Button 
                variant="outline"
                onClick={this.handleReset}
                className="flex-1 h-14 rounded-full font-black uppercase tracking-widest border-2 border-[#020617] text-[#020617] hover:bg-gray-50"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </div>
            {(import.meta as any).env?.DEV && (
              <div className="mt-12 p-6 bg-red-50 rounded-2xl text-left border border-red-100 overflow-auto max-h-64">
                <p className="text-red-800 font-bold mb-2 uppercase tracking-widest text-xs">Technical Details:</p>
                <code className="text-xs text-red-600 block leading-relaxed">
                  {this.state.error?.toString()}
                </code>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
