import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BackToTop } from "..";
import { Typography } from "../../../General/Typography";


export default {
  title: "Components/Other/BackToTop",
  component: BackToTop,
  argTypes: {
    onClick: {
      control: { control: false },
    },
    icon: {
      control: { control: false },
    },
    shape: {
      control: { select: ["circle", "square"] },
    },
    size: {
      control: { select: ["small", "medium", "large"] },
    },
  }
} as ComponentMeta<typeof BackToTop>;

const BackToTopTemplate: ComponentStory<typeof BackToTop> = ({
  color,
  shape,
  size,
  ...rest
}) => {
  return (
    <>
      <Typography variant={'p'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
        condimentum turpis, sit amet semper nunc. Nam dui diam, elementum at
        hendrerit in, dictum id magna. Curabitur posuere eu arcu sit amet
        rhoncus. Suspendisse est erat, vestibulum eget commodo eget, commodo at
        odio. Duis porttitor ipsum at orci tincidunt lobortis. Pellentesque
        pellentesque tincidunt congue. Sed eu sapien congue, condimentum libero
        sit amet, sodales eros. Curabitur elementum tempor felis nec cursus.
        Aenean in mi ac tellus hendrerit molestie. Proin ex lectus, gravida at
        tortor sed, dictum hendrerit sapien. Duis imperdiet erat in dolor
        posuere ullamcorper. Sed neque quam, condimentum ac justo vel, volutpat
        fringilla risus. Mauris in leo faucibus, gravida ligula nec, efficitur
        urna. Cras venenatis eleifend nunc vitae rutrum. Vivamus tempus nunc ut
        vehicula cursus. Aenean lobortis ante dui, at finibus urna malesuada et.
        Nulla euismod tempor efficitur. Sed id sollicitudin nisl. Nullam luctus
        ipsum sed enim congue, ut sollicitudin nulla dapibus. Etiam ut ex vitae
        nisl venenatis cursus. Aliquam nec nibh ligula. Maecenas venenatis
        libero eros, ac suscipit nisi gravida quis. Phasellus urna turpis,
        iaculis nec sodales dapibus, consequat et urna. Nam tincidunt mi a metus
        lobortis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Phasellus commodo tellus porttitor mi viverra, sit amet dapibus
        ipsum ullamcorper. Integer auctor, massa sit amet tristique aliquam, est
        lacus tempus mauris, in ultricies lorem dolor eu dolor. Cras interdum
        tempor consectetur. Cras massa augue, pulvinar vel egestas pulvinar,
        posuere id nulla. Etiam consectetur vel tellus nec tempor. Nam id
        sodales mauris. In fringilla lorem et nisl convallis consequat. Donec
        pellentesque ullamcorper lectus eu pretium. Mauris ut quam sit amet
        augue aliquam porta ut ut nibh. Suspendisse sagittis lectus eget ante
        posuere, eget ullamcorper quam commodo. Fusce sed varius ipsum, vel
        dictum magna. Phasellus id est in dolor facilisis porta. Etiam eu neque
        ac nisi euismod lobortis euismod at enim. Nunc eu pharetra metus, a
        tincidunt ex. Proin vel tellus quis dolor laoreet aliquet nec eget
        dolor. Curabitur sagittis lacus eu orci tempor, ut sagittis neque
        mollis. Sed eleifend libero vitae odio dapibus hendrerit. Curabitur
        lacinia imperdiet augue id pellentesque. Morbi tincidunt consequat
        blandit. Pellentesque porttitor orci dolor, sed feugiat leo pharetra ac.
        Fusce congue, elit molestie malesuada interdum, nulla dui finibus risus,
        id fermentum magna nulla a tortor. Pellentesque dolor urna, commodo a
        libero sit amet, tempus consequat velit. Quisque mattis consequat neque,
        in hendrerit elit imperdiet imperdiet. Nam non congue leo. Mauris sit
        amet urna dignissim, molestie ligula vitae, venenatis lacus. Nam sit
        amet nisi ac orci egestas finibus a et quam. Vestibulum tempus rhoncus
        dui vel finibus. Praesent in mi enim. Nulla facilisi. Proin mollis
        posuere turpis ac mattis. Nunc eu tempor diam, quis accumsan lorem. Nam
        fringilla, erat at facilisis tempus, orci orci tempus diam, vitae
        consectetur arcu risus sed dui. Curabitur non velit in mauris aliquam
        gravida. Vivamus vel odio ut diam viverra sollicitudin. Nullam malesuada
        auctor neque, sit amet tincidunt mi eleifend eget. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Suspendisse est nulla, porttitor
        in lectus faucibus, iaculis fringilla justo. Fusce volutpat lacus eget
        rhoncus feugiat. Quisque iaculis dui vitae est egestas, id commodo nisi
        commodo. Vivamus vestibulum arcu ut est fermentum, sed facilisis urna
        maximus. Nulla dui diam, pellentesque quis magna sed, pellentesque
        hendrerit urna. Ut iaculis condimentum metus, non hendrerit velit rutrum
        in. Nam interdum semper urna pulvinar pulvinar. In commodo at orci vel
        imperdiet. Nam at elit at neque efficitur feugiat ac quis lectus.
        Vestibulum venenatis fermentum libero, eu commodo nulla volutpat nec.
        Morbi rhoncus erat aliquam arcu ultrices vehicula. Ut at accumsan orci.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Donec turpis neque, rhoncus nec nisi quis, commodo accumsan metus.
        Donec fringilla tincidunt porta. Nunc a urna pellentesque est
        scelerisque interdum et nec neque. Sed vel egestas diam, vel cursus
        augue. Integer ut massa non mi pretium pulvinar. Praesent ullamcorper ex
        id arcu sodales feugiat. Maecenas euismod ligula sit amet est suscipit
        interdum. Nullam convallis orci semper molestie rhoncus. Phasellus purus
        urna, pulvinar non bibendum ut, ornare eget lectus. Pellentesque finibus
        nulla eu iaculis fermentum. Aenean non magna ipsum. Aliquam tortor arcu,
        lacinia in ante non, rutrum euismod tortor. Mauris tincidunt ipsum quis
        elementum efficitur. Donec venenatis, risus sit amet mattis posuere,
        sapien neque tincidunt diam, non congue mi eros volutpat est. Quisque
        facilisis, dui a pellentesque mattis, orci metus convallis ex, nec
        vulputate velit felis vitae mi. Aliquam euismod, quam sed sollicitudin
        pulvinar, libero urna ultrices felis, sed tincidunt neque sem eu quam.
        Integer sed sem pulvinar, vehicula velit at, tempus sem. Donec aliquet
        tortor et lacinia tristique. Aenean erat sem, venenatis sit amet
        volutpat a, fringilla quis lorem. Integer rutrum elit sit amet consequat
        finibus. Proin nisl dolor, ornare sit amet sollicitudin id, mattis quis
        libero. Donec mattis eros quis neque ultricies, non pulvinar lectus
        elementum. Etiam lacinia erat semper, tincidunt libero a, dapibus massa.
        Praesent orci sem, suscipit quis libero eu, maximus venenatis justo.
        Nullam ornare, nulla non ultricies imperdiet, massa metus euismod sem,
        ut eleifend nisl arcu eu augue. Sed ultrices facilisis velit, non
        sodales purus aliquam nec. Nam quis nunc et ante blandit dignissim sit
        amet et magna.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
        condimentum turpis, sit amet semper nunc. Nam dui diam, elementum at
        hendrerit in, dictum id magna. Curabitur posuere eu arcu sit amet
        rhoncus. Suspendisse est erat, vestibulum eget commodo eget, commodo at
        odio. Duis porttitor ipsum at orci tincidunt lobortis. Pellentesque
        pellentesque tincidunt congue. Sed eu sapien congue, condimentum libero
        sit amet, sodales eros. Curabitur elementum tempor felis nec cursus.
        Aenean in mi ac tellus hendrerit molestie. Proin ex lectus, gravida at
        tortor sed, dictum hendrerit sapien. Duis imperdiet erat in dolor
        posuere ullamcorper. Sed neque quam, condimentum ac justo vel, volutpat
        fringilla risus. Mauris in leo faucibus, gravida ligula nec, efficitur
        urna. Cras venenatis eleifend nunc vitae rutrum. Vivamus tempus nunc ut
        vehicula cursus. Aenean lobortis ante dui, at finibus urna malesuada et.
        Nulla euismod tempor efficitur. Sed id sollicitudin nisl. Nullam luctus
        ipsum sed enim congue, ut sollicitudin nulla dapibus. Etiam ut ex vitae
        nisl venenatis cursus. Aliquam nec nibh ligula. Maecenas venenatis
        libero eros, ac suscipit nisi gravida quis. Phasellus urna turpis,
        iaculis nec sodales dapibus, consequat et urna. Nam tincidunt mi a metus
        lobortis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Phasellus commodo tellus porttitor mi viverra, sit amet dapibus
        ipsum ullamcorper. Integer auctor, massa sit amet tristique aliquam, est
        lacus tempus mauris, in ultricies lorem dolor eu dolor. Cras interdum
        tempor consectetur. Cras massa augue, pulvinar vel egestas pulvinar,
        posuere id nulla. Etiam consectetur vel tellus nec tempor. Nam id
        sodales mauris. In fringilla lorem et nisl convallis consequat. Donec
        pellentesque ullamcorper lectus eu pretium. Mauris ut quam sit amet
        augue aliquam porta ut ut nibh. Suspendisse sagittis lectus eget ante
        posuere, eget ullamcorper quam commodo. Fusce sed varius ipsum, vel
        dictum magna. Phasellus id est in dolor facilisis porta. Etiam eu neque
        ac nisi euismod lobortis euismod at enim. Nunc eu pharetra metus, a
        tincidunt ex. Proin vel tellus quis dolor laoreet aliquet nec eget
        dolor. Curabitur sagittis lacus eu orci tempor, ut sagittis neque
        mollis. Sed eleifend libero vitae odio dapibus hendrerit. Curabitur
        lacinia imperdiet augue id pellentesque. Morbi tincidunt consequat
        blandit. Pellentesque porttitor orci dolor, sed feugiat leo pharetra ac.
        Fusce congue, elit molestie malesuada interdum, nulla dui finibus risus,
        id fermentum magna nulla a tortor. Pellentesque dolor urna, commodo a
        libero sit amet, tempus consequat velit. Quisque mattis consequat neque,
        in hendrerit elit imperdiet imperdiet. Nam non congue leo. Mauris sit
        amet urna dignissim, molestie ligula vitae, venenatis lacus. Nam sit
        amet nisi ac orci egestas finibus a et quam. Vestibulum tempus rhoncus
        dui vel finibus. Praesent in mi enim. Nulla facilisi. Proin mollis
        posuere turpis ac mattis. Nunc eu tempor diam, quis accumsan lorem. Nam
        fringilla, erat at facilisis tempus, orci orci tempus diam, vitae
        consectetur arcu risus sed dui. Curabitur non velit in mauris aliquam
        gravida. Vivamus vel odio ut diam viverra sollicitudin. Nullam malesuada
        auctor neque, sit amet tincidunt mi eleifend eget. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Suspendisse est nulla, porttitor
        in lectus faucibus, iaculis fringilla justo. Fusce volutpat lacus eget
        rhoncus feugiat. Quisque iaculis dui vitae est egestas, id commodo nisi
        commodo. Vivamus vestibulum arcu ut est fermentum, sed facilisis urna
        maximus. Nulla dui diam, pellentesque quis magna sed, pellentesque
        hendrerit urna. Ut iaculis condimentum metus, non hendrerit velit rutrum
        in. Nam interdum semper urna pulvinar pulvinar. In commodo at orci vel
        imperdiet. Nam at elit at neque efficitur feugiat ac quis lectus.
        Vestibulum venenatis fermentum libero, eu commodo nulla volutpat nec.
        Morbi rhoncus erat aliquam arcu ultrices vehicula. Ut at accumsan orci.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Donec turpis neque, rhoncus nec nisi quis, commodo accumsan metus.
        Donec fringilla tincidunt porta. Nunc a urna pellentesque est
        scelerisque interdum et nec neque. Sed vel egestas diam, vel cursus
        augue. Integer ut massa non mi pretium pulvinar. Praesent ullamcorper ex
        id arcu sodales feugiat. Maecenas euismod ligula sit amet est suscipit
        interdum. Nullam convallis orci semper molestie rhoncus. Phasellus purus
        urna, pulvinar non bibendum ut, ornare eget lectus. Pellentesque finibus
        nulla eu iaculis fermentum. Aenean non magna ipsum. Aliquam tortor arcu,
        lacinia in ante non, rutrum euismod tortor. Mauris tincidunt ipsum quis
        elementum efficitur. Donec venenatis, risus sit amet mattis posuere,
        sapien neque tincidunt diam, non congue mi eros volutpat est. Quisque
        facilisis, dui a pellentesque mattis, orci metus convallis ex, nec
        vulputate velit felis vitae mi. Aliquam euismod, quam sed sollicitudin
        pulvinar, libero urna ultrices felis, sed tincidunt neque sem eu quam.
        Integer sed sem pulvinar, vehicula velit at, tempus sem. Donec aliquet
        tortor et lacinia tristique. Aenean erat sem, venenatis sit amet
        volutpat a, fringilla quis lorem. Integer rutrum elit sit amet consequat
        finibus. Proin nisl dolor, ornare sit amet sollicitudin id, mattis quis
        libero. Donec mattis eros quis neque ultricies, non pulvinar lectus
        elementum. Etiam lacinia erat semper, tincidunt libero a, dapibus massa.
        Praesent orci sem, suscipit quis libero eu, maximus venenatis justo.
        Nullam ornare, nulla non ultricies imperdiet, massa metus euismod sem,
        ut eleifend nisl arcu eu augue. Sed ultrices facilisis velit, non
        sodales purus aliquam nec. Nam quis nunc et ante blandit dignissim sit
        amet et magna.
      </Typography>
      <BackToTop color={color} size={size} shape={shape}/>
    </>
  );
}

export const BackToTopComponent = BackToTopTemplate.bind({});
