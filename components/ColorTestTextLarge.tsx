import {
  Box,
  Text,
  Section,
  Container,
  Grid,
  Code,
  Heading,
  Flex,
  Paragraph,
} from '@modulz/design-system';
import { CheckIcon, CheckboxIcon } from '@radix-ui/react-icons';

export function ColorTestTextLarge() {
  return (
    <Box>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gap: 2,
          ai: 'center',
          my: '$5',
        }}
      >
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$gray9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Gray 9
          </Text>
          <Flex
            css={{
              bc: '$gray11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$mauve9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Mauve 9
          </Text>
          <Flex
            css={{
              bc: '$mauve11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$slate9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Slate 9
          </Text>
          <Flex
            css={{
              bc: '$slate11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$sage9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Sage 9
          </Text>
          <Flex
            css={{
              bc: '$sage11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$olive9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Olive 9
          </Text>
          <Flex
            css={{
              bc: '$olive11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$sand9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Sand 9
          </Text>
          <Flex
            css={{
              bc: '$sand11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$tomato9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Tomato 9
          </Text>
          <Flex
            css={{
              bc: '$tomato11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$red9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Red 9
          </Text>
          <Flex
            css={{
              bc: '$red11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$crimson9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Crimson 9
          </Text>
          <Flex
            css={{
              bc: '$crimson11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$pink9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Pink 9
          </Text>
          <Flex
            css={{
              bc: '$pink11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$plum9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Plum 9
          </Text>
          <Flex
            css={{
              bc: '$plum11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$purple9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Purple 9
          </Text>
          <Flex
            css={{
              bc: '$purple11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$violet9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Violet 9
          </Text>
          <Flex
            css={{
              bc: '$violet11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$indigo9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Indigo 9
          </Text>
          <Flex
            css={{
              bc: '$indigo11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$blue9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Blue 9
          </Text>
          <Flex
            css={{
              bc: '$blue11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$cyan9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Cyan 9
          </Text>
          <Flex
            css={{
              bc: '$cyan11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$teal9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Teal 9
          </Text>
          <Flex
            css={{
              bc: '$teal11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$green9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Green 9
          </Text>
          <Flex
            css={{
              bc: '$green11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$grass9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Grass 9
          </Text>
          <Flex
            css={{
              bc: '$grass11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$orange9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Orange 9
          </Text>
          <Flex
            css={{
              bc: '$orange11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$brown9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Brown 9
          </Text>
          <Flex
            css={{
              bc: '$brown11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$bronze9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Bronze 9
          </Text>
          <Flex
            css={{
              bc: '$bronze11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$gold9' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Gold 9
          </Text>
          <Flex
            css={{
              bc: '$gold11',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
