import Editor from '@/components/editor';
import { NextPage } from 'next';

interface Props {}

const create: NextPage<Props> = () => {
  return (<div className="max-w-4xl mx-auto">
    <Editor />
  </div>
  )
};

export default create;