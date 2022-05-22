import { FC } from 'react'
import { ClassNamable, HasChildren } from '../../../types/UtilityProps'
import { Root } from '../../utils/Root'
import cn from 'classnames'
import { ObserverComponent } from '../../utils/ObserverComponent'
import { useNav } from '../../../hooks/useNav'

export const Router: FC<ClassNamable & HasChildren> = ObserverComponent(
  ({ className, children }) => {
    const { page } = useNav()
    return (
      <>
        {Array.isArray(children)
          ? children.map((v, i) => (
              <Root
                className={cn(className)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transition: `all .3s`,
                  transform: `translateY(${(i - page) * 105}%)`,
                }}
              >
                {v}
              </Root>
            ))
          : children}
      </>
    )
  }
)
