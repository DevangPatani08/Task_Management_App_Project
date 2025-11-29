import PageHeader from '../Navigation/PageHeader';
import PageFooter from '../Navigation/PageFooter';

const PageLayout = ({children}) => {
    return (
        <div className='w-full min-w-screen h-auto min-h-screen flex flex-col items-center justify-start gap-0 overflow-hidden'>
            <PageHeader />
            <main className='w-full flex-1 flex flex-col items-center justify-start gap-0'>
                {children}
            </main>
            <PageFooter />
        </div>
    );
};

export default PageLayout;