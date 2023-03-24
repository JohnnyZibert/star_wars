import React, { Suspense } from 'react';
import { PageLoader } from 'src/shared/ui/PageLoader/PageLoader';
import { Header } from 'src/widgets/Header';
import AppRouter from '../app/providers/router/ui/AppRouter';

function App() {
    return (
        <div className="app">
            <Suspense fallback={<PageLoader />}>
                <Header />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
