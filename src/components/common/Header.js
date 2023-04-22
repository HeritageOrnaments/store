import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  chakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Center,
  MenuDivider,
  Avatar
} from '@chakra-ui/react';
import logo from '../../heritageornaments.svg';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')}
      align={'center'} minH={'50px'}
      borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Flex height={'30px'} alignItems={'center'} justifyContent={'center'} backgroundColor={'black'}>
        <Text color={'white'} textAlign={'center'} fontSize={'sm'}>SALE 40% OFF</Text>
      </Flex>
      <Flex
        bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')}
        minH={'50px'} py={{ base: 1 }} px={{ base: 2 }} align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-start'} direction={'row'} >
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>about us</Button>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>contact us</Button>
        </Stack>
        <Flex flex={{ base: 1 }} justify={'center'}>
          <Link href='/store/home'>
            <img height="100" width="150" alt='logo' src={logo} />
          </Link>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Menu >
            <MenuButton as={Button} variant={'link'} cursor={'pointer'} minW={0}>
              <Avatar size={'sm'} src={'http://via.placeholder.com/50x50'} />
            </MenuButton>
            <MenuList alignItems={'center'}>
              <br />
              <Center> <Avatar size={'2xl'} src={'http://via.placeholder.com/50x50'} /> </Center>
              <br />
              <Center> <p>Username</p> </Center>
              <br />
              <MenuDivider />
              <MenuItem>Account Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
          <Flex p={4} justifyContent="center" alignItems="center" >
            <chakra.span pos="relative" display="inline-block">
              <Icon
                boxSize={6}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </Icon>
              <chakra.span
                pos="absolute"
                top="-1px"
                right="-1px"
                px={2}
                py={1}
                fontSize="xs"
                fontWeight="bold"
                lineHeight="none"
                color="red.100"
                transform="translate(50%,-50%)"
                bg="red.600"
                rounded="full"
              >
                99
              </chakra.span>
            </chakra.span>
          </Flex>
        </Stack>
      </Flex>
      <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'} justifyContent={'center'}>
        <DesktopNav />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} p={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={4}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                minW={2}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}>
      <Stack direction={'row'} textAlign={'left'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'gray.900' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel} </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'left'}
          flex={1}>
          <Icon color={'gray.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Bangles',
    children: [
      {
        label: 'Bangles Best Sellers',
        subLabel: 'Bangles Best Sellers',
        href: '/store/category',
      },
      {
        label: 'Bangles New',
        subLabel: 'Up-and-coming Designers',
        href: '/store/category',
      },
    ],
  },
  {
    label: 'Jewelry',
    children: [
      {
        label: 'Jewelry Best Sellers',
        subLabel: 'Jewelry Best Sellers',
        href: '/store/category',
      },
      {
        label: 'Jewelry New',
        subLabel: 'Up-and-coming Designers',
        href: '/store/category',
      },
    ],
  },
];