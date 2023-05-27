import { Stack } from '@chakra-ui/react'
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import AddressForm from '../common/forms/AddressForm.js';
import { CartOrderSummary } from '../cart/components/CartOrderSummary.js';
export default function Checkout() {

    return (
        <div className="PLP" >
            <Header />
            <Stack alignItems={'start'} m={10} direction={{ base: 'column',sm:'column', lg: 'row', }}>
                <Stack width={{ base: '100%', sm:'100%', lg: '60%', }}>
                    <AddressForm />
                </Stack>
                <Stack width={{ base: '100%', sm:'100%', lg: '40%', }}>
                    <CartOrderSummary />
                </Stack>
            </Stack>
            <Footer />
        </div>
    );
}
