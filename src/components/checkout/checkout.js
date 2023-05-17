import { Stack, HStack } from '@chakra-ui/react'
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import AddressForm from '../common/forms/AddressForm.js';
import { CartOrderSummary } from '../cart/components/CartOrderSummary.js';
export default function Checkout() {

    return (
        <div className="PLP" >
            <Header />
            <HStack alignItems={'start'} m={10}>
                <Stack width='60%'>
                    <AddressForm />
                </Stack>
                <Stack width='40%'>
                    <CartOrderSummary />
                </Stack>
            </HStack>
            <Footer />
        </div>
    );
}
