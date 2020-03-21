import styled from "styled-components";

export const ListWrapper = styled.ul`
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 14px 24px;

  $:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 0.4px;
`;

export const Source = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 15px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  &:visited {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
`;
