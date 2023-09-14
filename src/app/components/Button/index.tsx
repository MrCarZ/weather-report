import { ButtonProps as AntdButtonProps, Tooltip } from 'antd';
import { StyledButton } from './styles';

export type ButtonProps = AntdButtonProps & {
  tooltip?: string;
};

export default function Button({ tooltip, title, ...props }: ButtonProps) {
  return (
    <Tooltip title={tooltip}>
      <StyledButton {...props}>{title}</StyledButton>
    </Tooltip>
  );
}
